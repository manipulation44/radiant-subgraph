import { Address } from "@graphprotocol/graph-ts";
import { User, Asset } from "../../generated/schema";

export function loadUser(address: Address): User {
  let user = User.load(address.toHexString());

  if (!user) {
    user = new User(address.toHexString());

    user.save();
  }

  return user as User;
}

export function loadAsset(address: Address): Asset {
  let asset = Asset.load(address.toHexString());

  if (!asset) {
    asset = new Asset(address.toHexString());

    asset.save();
  }

  return asset as Asset;
}
