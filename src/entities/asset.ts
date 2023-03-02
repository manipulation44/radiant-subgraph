import { Address } from "@graphprotocol/graph-ts";
import { Asset } from "../../generated/schema";

export function loadAsset(address: Address): Asset {
  let asset = Asset.load(address.toHexString());

  if (!asset) {
    asset = new Asset(address.toHexString());

    asset.save();
  }

  return asset as Asset;
}
