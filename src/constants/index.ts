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
  "0x8823Ca7690Ca66018d3bB82EDeB1Ff21A4d2E6e1"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0x897090544959Fbe23752E2B9a04b033913934790"
);

export const ASSET_SYMBOLS = "BUSD,USDT,USDC,BTCB,BNB,WETH".split(",");

export const RTOKEN_ADDRESSES = "0x37D99b6D87984DbF103F68B769B05c3987ec49D4,0x58276F1d3e1AE93dC908984aF5D2a741860Ce57e,0xeDA78914d2F9E7e5Dcd735a9D765DB4eF7Ccf93F,0xfA53C01cC34373BA8EF3F7d872b04d355A550D3D,0x3447C1196770B9635a7385cBffD1235985311Ae0,0x24d6067CF72271521EE13C06C6470093BC6C8005".split(",");
