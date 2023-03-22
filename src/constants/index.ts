import { Address, BigInt, BigDecimal } from "@graphprotocol/graph-ts";

export const ADDRESS_ZERO = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const BIG_DECIMAL_1E6 = BigDecimal.fromString("1e6");
export const BIG_DECIMAL_1E10 = BigDecimal.fromString("1e10");
export const BIG_DECIMAL_1E12 = BigDecimal.fromString("1e12");
export const BIG_DECIMAL_1E18 = BigDecimal.fromString("1e18");
export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");
export const BIG_DECIMAL_ONE = BigDecimal.fromString("1");
export const BIG_DECIMAL_HUNDRED = BigDecimal.fromString("100");

export const BIG_INT_ONE = BigInt.fromI32(1);
export const BIG_INT_ZERO = BigInt.fromI32(0);
export const NULL_CALL_RESULT_VALUE =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

export const MULTI_FEE_DISTRIBUTION_ADDRESS = Address.fromString(
  "0x58Ea79F8699FeDa7Ef20FBceAAFA75331bCA7A76"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0xB9a82Fe84cCd71fef03129F8e08DE8c14F14E1dC"
);

export const ASSET_SYMBOLS = "BUSD,USDT,DAI,WBTC,BNB,WETH".split(",");

export const RTOKEN_ADDRESSES = "0x30d06C6396398153cD1f9e8be58f75fDcC610378,0x321f3c827826f17Cec9f454ff39e8bC515138AB7,0x548075dd4f3b65291b167C83BEe885BdE9f4e2Cb,0x90Fa01577D18A3eBd9BB2B82BD0E6103FdB70c58,0xAcf8E2A47801d1C0eD899a14f097dc20f1d9c58A,0xe9f21C6d3F0A8d0919eB6cE309eb4b1b6C3bBb4a".split(",");
