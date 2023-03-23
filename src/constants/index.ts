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
  "0x0289b4Fe1F7a80197FBb63f250C819a6B6C016C2"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0xfd2caC5fEd20ED1F349a3DF444D2bCccB6bb535F"
);

export const ASSET_SYMBOLS = "BUSD,USDT,DAI,WBTC,BNB,WETH".split(",");

export const RTOKEN_ADDRESSES = "0x43327100d567cB2806a966973ba40b31AC4afAC1,0x6834B897d14FE9CBAfe58114057050e41F53E5C5,0x9B9350461BE09C1Fe06BAc03C5c361B58c0B484E,0x0ED0bFeC9cB81A59cCadAeC5083bE56113f81513,0xC5C3c8f8e818eB9826c8c15c35d544C16dFf1496,0x2E78b91D2Fee0BCcB6962207d0136003709f4675".split(",");
