import { newMockEvent } from "matchstick-as";
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { Mint } from "../generated/UniswapV3Pool/UniswapV3Pool";

export function createMintEvent(): Mint {
  let mockEvent = newMockEvent();

  let mintEvent = new Mint(
    mockEvent.address,
    mockEvent.logIndex,
    mockEvent.transactionLogIndex,
    mockEvent.logType,
    mockEvent.block,
    mockEvent.transaction,
    mockEvent.parameters,
    mockEvent.receipt
  );

  mintEvent.parameters = new Array();

  mintEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(Address.fromString("0x000000000000000000000000000000000000dead")))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(Address.fromString("0x000000000000000000000000000000000000c0de")))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("tickLower", ethereum.Value.fromI32(-60))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("tickUpper", ethereum.Value.fromI32(60))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1000)))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("amount0", ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(500)))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("amount1", ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(500)))
  );

  return mintEvent;
}
