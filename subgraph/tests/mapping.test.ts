import { test, assert, clearStore } from "matchstick-as/assembly/index";
import { handleMint } from "../src/mapping";
import { createMintEvent } from "./utils";

test("handleMint creates a Position entity", () => {
  let event = createMintEvent();
  handleMint(event);
  assert.fieldEquals("Position", event.transaction.hash.toHex(), "owner", event.params.owner.toHex());
  assert.fieldEquals("Position", event.transaction.hash.toHex(), "liquidity", event.params.amount.toString());
  clearStore();
});
