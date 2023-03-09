import {
  Compounded as CompoundedEvent,
  Relocked as RelockedEvent,
  ExpiredLocksRemoved as ExpiredLocksRemovedEvent,
  Locked as LockedEvent,
} from "../generated/MultiFeeDistribution/MultiFeeDistribution";

import { Compounded, Relocked, ExpiredLocksRemoved, Locked, TotalLocked } from "../generated/schema";
import { loadTotalLocked } from "./entities/totalLocked";
import { loadUser } from "./entities/user";
import { getHistoryEntityId } from "./utils";
import { BETA_TEST_START_TIMESTAMP, BETA_TEST_PERIOD, BETA_TESTERS } from "./constants";
import { loadLpLocker } from "./entities/lpLocker";

export function handleCompounded(event: CompoundedEvent): void {
  let user = loadUser(event.params._user);

  let entity = new Compounded(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "Compounded";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.amount = event.params._amount;

  entity.save();
}

export function handleRelocked(event: RelockedEvent): void {
  let user = loadUser(event.params.user);

  let entity = new Relocked(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "Relocked";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.amount = event.params.amount;
  entity.lockIndex = event.params.lockIndex;

  entity.save();
}

export function handleLocked(event: LockedEvent): void {
  let user = loadUser(event.params.user);
  
  let totalLocked = loadTotalLocked(event.params.isLP.toString());
  totalLocked.totalLocked = totalLocked.totalLocked.plus(event.params.usdValue);
  totalLocked.save();
  
  if(event.params.isLP){
    const timestamp = event.block.timestamp.toI32();
    const isBetaTester = BETA_TESTERS.indexOf(event.params.user.toHexString()) >= 0;
    let lpLocker = loadLpLocker(event.params.user);
    lpLocker.lpLocked = lpLocker.lpLocked.plus(event.params.usdValue);
    lpLocker.isBetaTesterInTestPeriod = isBetaTester && timestamp > BETA_TEST_START_TIMESTAMP && timestamp <= BETA_TEST_START_TIMESTAMP + BETA_TEST_PERIOD;
    lpLocker.save();
  }

  let entity = new Locked(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "Locked";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.usdValue = event.params.usdValue;
  entity.isLP = event.params.isLP;

  entity.save();
}

export function handleExpiredLocksRemoved(
  event: ExpiredLocksRemovedEvent
): void {
  let user = loadUser(event.params._user);

  let entity = new ExpiredLocksRemoved(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "ExpiredLocksRemoved";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.unlockable = event.params.unlockable;
  entity.ineligInRdnt = event.params.ineligInRdnt;

  entity.save();
}
