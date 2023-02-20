import { ShoppingItem } from "../Item";

describe("ShoppingItem", () => {
  it("should toggle item", () => {
    const item = setup();
    expect(item.checked).toBeFalsy();

    item.toggle();

    expect(item.checked).toBeTruthy();

    item.toggle();

    expect(item.checked).toBeFalsy();
  });

  const setup = () => {
    return new ShoppingItem("rice", false, 2);
  };
});
