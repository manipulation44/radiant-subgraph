import { BigInt } from "@graphprotocol/graph-ts";
import { TotalTransferred } from "../../generated/schema";

export function loadTotalTransferred(): TotalTransferred {
  let totalTransferred = TotalTransferred.load("1");

  if (!totalTransferred) {
    totalTransferred = new TotalTransferred("1");
    totalTransferred.totalTransferred = BigInt.fromI32(0);

    totalTransferred.save();
  }

  return totalTransferred as TotalTransferred;
}
