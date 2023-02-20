import { ShoppingItem } from "../Item";
import { ShoppingList } from "../List";

describe("ShoppingList", () => {
  it("should add an item", () => {
    const list = setup();

    list.add(ShoppingItem.create("Rice", 1));

    expect(list.items).toHaveLength(1);
  });

  it("should delete a item from a list", () => {
    const list = setup();
    const item = ShoppingItem.create("Rice", 1);
    list.add(item);

    list.remove(item.id);

    expect(list.items).toHaveLength(0);
  });

  const setup = () => {
    return ShoppingList.create("my list");
  };
});
