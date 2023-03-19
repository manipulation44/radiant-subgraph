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
  "0x76ba3eC5f5adBf1C58c91e86502232317EeA72dE"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0xebC85d44cefb1293707b11f707bd3CEc34B4D5fA"
);

export const ASSET_SYMBOLS = "USDC,USDT,DAI,WBTC,ETH".split(",");

export const RTOKEN_ADDRESSES = "0x48a29E756CC1C097388f3B2f3b570ED270423b3d,0xd69D402D1bDB9A2b8c3d88D98b9CEaf9e4Cd72d9,0x0D914606f3424804FA1BbBE56CCC3416733acEC6,0x727354712BDFcd8596a3852Fd2065b3C34F4F770,0x0dF5dfd95966753f01cb80E76dc20EA958238C46".split(",");
