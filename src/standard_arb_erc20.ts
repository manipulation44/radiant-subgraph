import { Transfer as TransferEvent } from "../generated/StandardArbERC20/StandardArbERC20";
import { loadBalTransfer } from "./entities/loadBalTransfer";
import {
  BAL_REWARD_ADDRESS,
  MULTI_FEE_DISTRIBUTION_ADDRESS,
} from "./constants";
import { NewBalTransfer } from "../generated/schema";
import { getHistoryEntityId } from "./utils";

export function handleTransfer(event: TransferEvent): void {
  if (
    event.params.from.toHexString().toLowerCase() ==
      BAL_REWARD_ADDRESS.toHexString().toLowerCase() &&
    event.params.to.toHexString().toLowerCase() ==
    MULTI_FEE_DISTRIBUTION_ADDRESS.toHexString().toLowerCase()
  ) {
    let balTransferred = loadBalTransfer();
    let newBalTransfer = new NewBalTransfer(getHistoryEntityId(event));
    newBalTransfer.amount = event.params.value;
    newBalTransfer.total = balTransferred.amount;
    newBalTransfer.timestamp = event.block.timestamp.toI32();
    newBalTransfer.save();

    balTransferred.amount = balTransferred.amount.plus(event.params.value);
    balTransferred.save();
  }
}
