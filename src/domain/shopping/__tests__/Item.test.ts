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

  it("should check item", () => {
    const item = setup();
    expect(item.checked).toBeFalsy();

    item.check();
    expect(item.checked).toBeTruthy();
  });

  it("should uncheck item", () => {
    const item = setup({ checked: true });
    expect(item.checked).toBeTruthy();

    item.uncheck();
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

  const setup = ({ checked = false } = {}) => {
    return ShoppingItem.create("Rice", 1, checked);
  };
});
