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

  it("should check all items on list", () => {
    const list = setup();
    list.add(ShoppingItem.create("Rice", 1, false));
    list.add(ShoppingItem.create("pasta", 1, true));
    list.add(ShoppingItem.create("tomato", 1, false));

    list.checkAll();

    expect(list.items.every((item) => item.checked)).toBeTruthy();
  });

  it("should uncheck all items on list", () => {
    const list = setup();
    list.add(ShoppingItem.create("Rice", 1, false));
    list.add(ShoppingItem.create("pasta", 1, true));
    list.add(ShoppingItem.create("tomato", 1, false));

    list.uncheckAll();

    expect(list.items.every((item) => !item.checked)).toBeTruthy();
  });

  it("should add quantity if same item is added twice", () => {
    const list = setup();
    const item = ShoppingItem.create("Rice", 1);
    list.add(item);
    list.add(item);

    expect(list.items).toHaveLength(1);
    expect(list.items[0].quantity).toBe(2);
  });

  const setup = () => {
    return ShoppingList.create("my list");
  };
});
