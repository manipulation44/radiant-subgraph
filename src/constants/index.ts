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
  "0x16feBa2fFDaA1E5d894A06F6406adb7918CDA113"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0x9987A5778A4400dc81817c47A0316f38226967Da"
);

export const BAL_REWARD_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const PRICE_PROVIDER_ADDRESS = Address.fromString(
  "0xF8459A97989c94335c7a14D4570e3274363aB85b"
);

export const ASSET_SYMBOLS = "USDT,USDC,DAI,ETH".split(",");

export const RTOKEN_ADDRESSES = "0xd131A32F106604D01dF6BBEA6bC0BA335007d304,0x02F53b783413052fB6D5ee3114D342534F1e27dA,0x87516191006FA577B584e0388F9be7E451f7B68D,0x2A3251B35C1d768660bE7D8faB1ED75E4Fb9E0f6".split(",");
