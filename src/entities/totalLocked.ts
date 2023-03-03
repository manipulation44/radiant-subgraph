import { BigInt } from "@graphprotocol/graph-ts";
import { TotalLocked } from "../../generated/schema";

export function loadTotalLocked(isLP: string): TotalLocked {
  let totalLocked = TotalLocked.load(isLP);

  if (!totalLocked) {
    totalLocked = new TotalLocked(isLP);
    totalLocked.totalLocked = BigInt.fromI32(0);

    totalLocked.save();
  }

  return totalLocked as TotalLocked;
}
