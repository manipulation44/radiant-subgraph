import { NewTransferAdded as NewTransferAddedEvent } from "../generated/MiddleFeeDistribution/MiddleFeeDistribution";
import { AssetTotalTransferred, NewTransferAdded } from "../generated/schema";
import { getAssetSymbol, loadAsset } from "./entities/asset";
import { loadTotalTransferred } from "./entities/loadTotalTransferred";
import { loadUsdTransfered } from "./entities/usdTransfer";
import { getHistoryEntityId } from "./utils";
import { ASSET_SYMBOLS } from "./constants";

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

  let assetTotals: string[] = [];
  for(let i = 0; i < ASSET_SYMBOLS.length; i++) {
    let symbol = ASSET_SYMBOLS[i];
    let id = getHistoryEntityId(event) + i.toString();
    let assetTotal = new AssetTotalTransferred(id);
    assetTotal.symbol = symbol;
    assetTotal.totalTransferred = assetSymbol === symbol ? loadTotalTransferred(symbol).totalTransferred.minus(event.params.lpUsdValue) : loadTotalTransferred(symbol).totalTransferred;
    assetTotal.save();
    assetTotals.push(id);
  }
  entity.assetTotals = assetTotals;
  entity.save();
}