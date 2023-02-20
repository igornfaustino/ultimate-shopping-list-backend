import { ShoppingItem } from "../../../../domain/shopping/Item";
import { ShoppingList } from "../../../../domain/shopping/List";
import { ShoppingItemMissing } from "../../errors/ShoppingItemMissing";
import { ShoppingListMissing } from "../../errors/ShoppingListMissing";
import { ToggleItemUseCase } from "../ToggleItem";

describe("ToggleItemUseCase", () => {
  it("should throw error if list is missing", async () => {
    const { useCase, shoppingListGateway, item } = setup();
    shoppingListGateway.getById.mockResolvedValueOnce(null);

    const promise = useCase.execute({
      listId: "any id",
      itemId: item.id,
    });

    await expect(promise).rejects.toThrowError(ShoppingListMissing);
  });

  it("should throw error if list is missing", async () => {
    const { useCase, shoppingListGateway, item } = setup();

    const promise = useCase.execute({
      listId: "any id",
      itemId: "wrong id",
    });

    await expect(promise).rejects.toThrowError(ShoppingItemMissing);
  });

  it("should toggle item", async () => {
    const { useCase, shoppingListGateway, item } = setup();

    await useCase.execute({
      listId: "any id",
      itemId: item.id,
    });

    expect(shoppingListGateway.save).toHaveBeenCalled();
    const listSaved = shoppingListGateway.save.mock.calls[0][0] as ShoppingList;
    expect(listSaved.items).toHaveLength(1);
    expect(listSaved.items[0].name).toBe("rice");
    expect(listSaved.items[0].quantity).toBe(3);
    expect(listSaved.items[0].checked).toBe(true);
  });

  const setup = () => {
    const shoppingList = ShoppingList.create("fake list");
    const item = ShoppingItem.create("rice", 3);
    shoppingList.add(item);
    const shoppingListGateway = {
      save: jest.fn().mockResolvedValue({ id: "1111-2222-3333-4444" }),
      getById: jest.fn().mockResolvedValue(shoppingList),
    };
    const useCase = new ToggleItemUseCase(shoppingListGateway);
    return {
      useCase,
      shoppingListGateway,
      item,
    };
  };
});
