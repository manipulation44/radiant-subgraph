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
  "0x7f115a2Ad7E06a50155f289E75c32a1759fc2d75"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0xB15E41A691Bc1b87bd42268dB0D91E5C32b6658d"
);

export const ASSET_SYMBOLS = "BUSD,USDT,USDC,BTCB,BNB,WETH".split(",");

export const RTOKEN_ADDRESSES = "0xE628FdF6fD4994Ad70CCd15375Ba3006275db37e,0x6E9a4A26d6fA0132c63E9c23EF2138518f4ef93A,0x06ADe931E158812CB9936F26d0dfE4626d5EF94f,0x52797320C9a9a47B9E089e923454BC2cb28C6a4E,0x627D2404Fe29DC543bb1D583fb99530E8b3a01C9,0x2451476362D67b067D02D3022a725C70a555A379".split(",");
