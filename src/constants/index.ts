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
  "0x9089d57bCb905Fb844AeAc2d671beaAb9ad82fFc"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0xCeF4cAc75cc4391d6865F1829Dce73339abDC472"
);

export const ASSET_SYMBOLS = "USDC,USDT,DAI,WBTC,ETH".split(",");

export const RTOKEN_ADDRESSES = "0xbE58393143521920396432222fA54a68F8A0eb8b,0x708C180BB5651126897E44928d3E295b47b61476,0xD7bd1Fa82B8CBd74093A6b816E93Ff8542834C39,0xc153656bc1B7B6F43eb11724a7Ce70aBf313eb81,0x32c503c6136c5e50E88b49C8Cf56916B1C666aC0".split(",");
