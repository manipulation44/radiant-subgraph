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
  "0x359997b8ddDdEE9Bc6f223a5cf44abAa72e42365"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0x1E2f7B31e789Aef86ca3F99b4B3Daa3be8278f3e"
);

export const ASSET_SYMBOLS = "USDC,USDT,DAI,WBTC,ETH".split(",");

export const RTOKEN_ADDRESSES = "0x57f809351C89c52e5c0E16f26009af1c843F7760,0x31Cc5069279B64b434aa80AC0De852C6662af9Fb,0x89f2d69Fb929f0bAa9a2C8bB1Cff12A08af9fc2f,0x41E2C65e630EC35603444EDee576Cf1e18a17785,0xe99DA98C2f0797875143e614A8466aB09c5B3Efd".split(",");
