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
  "0xf088937845327579AE8722f45233c7C3523638f5"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0xe4945591EfA99d5a0f4908458be68bC341C62A81"
);

export const ASSET_SYMBOLS = "BUSD,USDT,USDC,BTCB,BNB,WETH".split(",");

export const RTOKEN_ADDRESSES = "0x04638E0859d41771D1EC49439824c3C3E08E37de,0x2B072C78Ee948767b07502B67c87B1dAF9f80CeD,0x38b2802F15FF4548CA8Ff09e79A5aAAEDFC3Ee85,0x9A8bAb6f7866b165f01442e50a649633869a23eA,0xD68f6D7681B02422317562d9B4910EEd4f4455D2,0x17ED3D7725B816e4fe36BAca05Fa66c929B16490".split(",");
