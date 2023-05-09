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
  "0x1c85638e118b37167e9298c2268758e058DdfDA0"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3"
);

export const BAL_REWARD_ADDRESS = Address.fromString(
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
);

export const ASSET_SYMBOLS = "USDC,USDT,DAI,WBTC,ETH".split(",");

export const RTOKEN_ADDRESSES = "0x7D272174D975Ac3A4436aB9A30C61e4ce92E7384,0xdC5EFc8D12F514DA9479FF4770f22dd5dBC4024f,0x43ABE70e0F23c2ab2C935Dd3ac557A6152f9D5f5,0x8d41203eCc925878e7F34A98e3DB0DeDF3E853db,0x0793961c68928FE08601F7eB95F3C91b7D215F1F".split(",");
