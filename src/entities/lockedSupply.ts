import { BigInt } from "@graphprotocol/graph-ts";
import { LockedSupply, LpTokenPrice } from "../../generated/schema";

export function loadLockedSupply(): LockedSupply {
  let lockedSupply = LockedSupply.load("1");

  if (!lockedSupply) {
    lockedSupply = new LockedSupply("1");
    lockedSupply.lockedSupply = BigInt.fromI32(0);
    lockedSupply.address = "";

    lockedSupply.save();
  }

  return lockedSupply as LockedSupply;
}

export function loadLpTokenPrice(): LpTokenPrice {
  let lpTokenPrice = LpTokenPrice.load("1");

  if (!lpTokenPrice) {
    lpTokenPrice = new LpTokenPrice("1");
    lpTokenPrice.price = BigInt.fromI32(0);
    lpTokenPrice.blockNumber = BigInt.fromI32(0);

    lpTokenPrice.save();
  }

  return lpTokenPrice as LpTokenPrice;
}
