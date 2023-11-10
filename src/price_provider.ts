import { ethereum } from '@graphprotocol/graph-ts';
import { PRICE_PROVIDER_ADDRESS } from "./constants";
import { loadLpTokenPrice } from "./entities/lockedSupply";
import { PriceProvider } from "../generated/PriceProvider/PriceProvider";

export function getLpTokenPrice(block: ethereum.Block): void {
  let lpTokenPrice = loadLpTokenPrice();
  let priceProviderContract = PriceProvider.bind(PRICE_PROVIDER_ADDRESS);
  lpTokenPrice.price = priceProviderContract.getLpTokenPriceUsd();
  lpTokenPrice.blockNumber = block.number;
  lpTokenPrice.save();
}
