import { BigInt } from "@graphprotocol/graph-ts"
import { Mint, Burn, Collect } from "../generated/UniswapV3Pool/UniswapV3Pool"
import { Position } from "../generated/schema"

export function handleMint(event: Mint): void {
  let id = event.transaction.hash.toHex();
  let position = new Position(id);
  position.owner = event.params.owner;
  position.liquidity = event.params.amount;
  position.collectedFeesToken0 = BigInt.zero();
  position.collectedFeesToken1 = BigInt.zero();
  position.pool = event.address.toHex();
  position.save();
}

export function handleBurn(event: Burn): void {
  let id = event.transaction.hash.toHex();
  let position = Position.load(id);
  if (position) {
    position.liquidity = position.liquidity.minus(event.params.amount);
    position.save();
  }
}

export function handleCollect(event: Collect): void {
  let id = event.transaction.hash.toHex();
  let position = Position.load(id);
  if (position) {
    position.collectedFeesToken0 = position.collectedFeesToken0.plus(event.params.amount0);
    position.collectedFeesToken1 = position.collectedFeesToken1.plus(event.params.amount1);
    position.save();
  }
}
