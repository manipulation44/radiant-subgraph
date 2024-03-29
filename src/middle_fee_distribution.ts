import { NewTransferAdded as NewTransferAddedEvent } from "../generated/MiddleFeeDistribution/MiddleFeeDistribution";
import { NewTransferAdded } from "../generated/schema";
import { getAssetSymbol, loadAsset } from "./entities/asset";
import { loadTotalTransferred } from "./entities/loadTotalTransferred";
import { loadUsdTransfered } from "./entities/usdTransfer";
import { getHistoryEntityId } from "./utils";

export function handleNewTransferAdded(event: NewTransferAddedEvent): void {
  let asset = loadAsset(event.params.asset);
  let usdTransfered = loadUsdTransfered();
  usdTransfered.totalLpUsdTransfered = usdTransfered.totalLpUsdTransfered.plus(event.params.lpUsdValue);
  usdTransfered.save();

  let totalTransferred = loadTotalTransferred("total");
  totalTransferred.totalTransferred = totalTransferred.totalTransferred.plus(event.params.lpUsdValue);
  totalTransferred.save();

  let assetSymbol = getAssetSymbol(event.params.asset);

  let totalTransferredPerAsset = loadTotalTransferred(assetSymbol);
  totalTransferredPerAsset.totalTransferred = totalTransferredPerAsset.totalTransferred.plus(event.params.lpUsdValue);
  totalTransferredPerAsset.save();

  let entity = new NewTransferAdded(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "NewTransferAdded";
  entity.asset = asset.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.lpUsdValue = event.params.lpUsdValue;
  entity.totalTransferred = totalTransferred.totalTransferred;
  entity.usdcTotal = assetSymbol === "USDC" ? loadTotalTransferred("USDC").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("USDC").totalTransferred;
  entity.usdtTotal = assetSymbol === "USDT" ? loadTotalTransferred("USDT").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("USDT").totalTransferred;
  entity.daiTotal = assetSymbol === "DAI" ? loadTotalTransferred("DAI").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("DAI").totalTransferred;
  entity.wbtcTotal = assetSymbol === "WBTC" ? loadTotalTransferred("WBTC").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("WBTC").totalTransferred;
  entity.ethTotal = assetSymbol === "ETH" ? loadTotalTransferred("ETH").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("ETH").totalTransferred;
  entity.glpTotal = assetSymbol === "GLP" ? loadTotalTransferred("GLP").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("GLP").totalTransferred;
  entity.fraxTotal = assetSymbol === "FRAX" ? loadTotalTransferred("FRAX").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("FRAX").totalTransferred;
  entity.busdTotal = assetSymbol === "BUSD" ? loadTotalTransferred("BUSD").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("BUSD").totalTransferred;
  entity.wethTotal = assetSymbol === "WETH" ? loadTotalTransferred("WETH").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("WETH").totalTransferred;
  entity.bnbTotal = assetSymbol === "BNB" ? loadTotalTransferred("BNB").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("BNB").totalTransferred;
  entity.btcbTotal = assetSymbol === "BTCB" ? loadTotalTransferred("BTCB").totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred("BTCB").totalTransferred;

  entity.save();
}