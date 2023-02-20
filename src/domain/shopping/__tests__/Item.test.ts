import { ShoppingItem } from "../Item";
import { randomUUID } from "crypto";

describe("ShoppingItem", () => {
  it("should toggle item", () => {
    const item = setup();
    expect(item.checked).toBeFalsy();

    item.toggle();
    expect(item.checked).toBeTruthy();
    item.toggle();

    expect(item.checked).toBeFalsy();
  });

  it("should create a item with a random id", () => {
    const item = ShoppingItem.create("rice", 2);

    expect(item.id).toBeDefined();
  });

  it("should create a item with a fixed id", () => {
    const id = randomUUID();
    const item = ShoppingItem.instantiate(id, "rice", 2);

    expect(item.id).toBe(id);
  });

  const setup = () => {
    return ShoppingItem.create("Rice", 1);
  };
});
