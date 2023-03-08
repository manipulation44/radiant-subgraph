import { BigInt, Address } from "@graphprotocol/graph-ts";
import { BetaTester } from "../../generated/schema";

export function loadBetaTester(address: Address): BetaTester {
  let betaTester = BetaTester.load(address.toHexString());

  if (!betaTester) {
    betaTester = new BetaTester(address.toHexString());
    betaTester.lpLocked = BigInt.fromI32(0);

    betaTester.save();
  }

  return betaTester as BetaTester;
}
