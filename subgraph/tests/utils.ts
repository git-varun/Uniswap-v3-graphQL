import { newMockEvent } from "matchstick-as";
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { Mint } from "../generated/UniswapV3Pool/UniswapV3Pool";

export function createMintEvent(
  sender: string = "0x000000000000000000000000000000000000c0de",
  owner: string = "0x000000000000000000000000000000000000dead",
  tickLower: number = -60,
  tickUpper: number = 60,
  amount: BigInt = BigInt.fromI32(1000),
  amount0: BigInt = BigInt.fromI32(500),
  amount1: BigInt = BigInt.fromI32(500)
): Mint {
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
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(Address.fromString(sender)))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(Address.fromString(owner)))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("tickLower", ethereum.Value.fromI32(tickLower))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("tickUpper", ethereum.Value.fromI32(tickUpper))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("amount0", ethereum.Value.fromUnsignedBigInt(amount0))
  );
  mintEvent.parameters.push(
    new ethereum.EventParam("amount1", ethereum.Value.fromUnsignedBigInt(amount1))
  );

  return mintEvent;
}
