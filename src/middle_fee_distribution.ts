import { NewTransferAdded as NewTransferAddedEvent } from "../generated/MiddleFeeDistribution/MiddleFeeDistribution";
import { NewTransferAdded } from "../generated/schema";
import { loadAsset } from "./entities/asset";
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

  let totalTransferredPerAsset = loadTotalTransferred(asset.id);
  totalTransferredPerAsset.totalTransferred = totalTransferredPerAsset.totalTransferred.plus(event.params.lpUsdValue);
  totalTransferredPerAsset.save();

  let entity = new NewTransferAdded(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "NewTransferAdded";
  entity.asset = asset.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.lpUsdValue = event.params.lpUsdValue;
  entity.totalTransferred = totalTransferred.totalTransferred;

  entity.save();
}