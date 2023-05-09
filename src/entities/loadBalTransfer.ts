import { BigInt } from "@graphprotocol/graph-ts";
import { BalTransferred } from "../../generated/schema";

export function loadBalTransfer(): BalTransferred {
  let balTransfer = BalTransferred.load("");

  if (!balTransfer) {
    balTransfer = new BalTransferred("");
    balTransfer.amount = BigInt.fromI32(0);

    balTransfer.save();
  }

  return balTransfer as BalTransferred;
}
