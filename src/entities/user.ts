import { Address } from "@graphprotocol/graph-ts";
import { User } from "../../generated/schema";
import { BIG_INT_ONE } from "../constants";

export function loadUser(address: Address): User {
  let user = User.load(address.toHexString());

  if (!user) {
    user = new User(address.toHexString());

    user.save();
  }

  return user as User;
}
