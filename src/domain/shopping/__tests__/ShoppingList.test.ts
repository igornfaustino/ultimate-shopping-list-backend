import { ShoppingItem } from "../Item";
import { ShoppingList } from "../List";

describe("ShoppingList", () => {
  it("should add an item", () => {
    const list = setup();

    list.add(new ShoppingItem("Rice", false, 1));

    expect(list.items).toHaveLength(1);
  });

  const setup = () => {
    return ShoppingList.create("my list");
  };
});
