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
  "0x6737f5062fF9A812fc924843a1515e1c294E8241"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0x0cFa18bC9CF6d9F8020B4267a5ff85e57d48Ab6F"
);

export const ASSET_SYMBOLS = "USDC,USDT,DAI,WBTC,ETH,GLP,FRAX".split(",");

export const RTOKEN_ADDRESSES = "0xB98d5dB1480B785A2E93dbB2ea9Ce1bf3dfaA190,0x2E30D700A1896508e16c35A871BE0287ecd1Ac7D,0x87a936EdC0E488B30A5F381EE890389c203dD8d3,0x98A4108c3A2f38B06F6E9061256dc09023e58436,0x8F87962a94B7f2fCBb38649799e6642c602f9e65,0x8e9eac9Fc9D67df3179bD6EdB44e5AC935DDbD71,0x8e37778DFEb4cdD9ffE7ee21231E762ce799F910".split(",");

export const SYMBOLS = ""
