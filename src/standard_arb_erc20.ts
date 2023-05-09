import { Transfer as TransferEvent } from "../generated/StandardArbERC20/StandardArbERC20";
import { loadBalTransfer } from "./entities/loadBalTransfer";
import { BAL_REWARD_ADDRESS, MULTI_FEE_DISTRIBUTION_ADDRESS } from "./constants";

export function handleDeposit(event: TransferEvent): void {
  if (event.params.from === BAL_REWARD_ADDRESS && event.params.to === MULTI_FEE_DISTRIBUTION_ADDRESS) {
      let balTransfer = loadBalTransfer();
    
      balTransfer.amount = balTransfer.amount.plus(event.params.value);
      balTransfer.save();
  }
}