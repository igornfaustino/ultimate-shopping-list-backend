import { ShoppingItem } from "../../../../domain/shopping/Item";
import { ShoppingList } from "../../../../domain/shopping/List";
import { ShoppingListMissing } from "../../errors/ShoppingListMissing";
import { AddItemsToShoppingListUseCase } from "../AddItemsToShoppingList";
import { RemoveItemsToShoppingListUseCase } from "../RemoveItemsToShoppingList";

describe("RemoveItemsToShoppingListUseCase", () => {
  it("should throw error if list is missing", async () => {
    const { useCase, shoppingListGateway, item } = setup();
    shoppingListGateway.getById.mockResolvedValueOnce(null);

    const promise = useCase.execute({
      listId: "any id",
      itemId: item.id,
    });

    await expect(promise).rejects.toThrowError(ShoppingListMissing);
  });

  it("should revome an item", async () => {
    const { useCase, shoppingListGateway, item } = setup();

    await useCase.execute({
      listId: "any id",
      itemId: item.id,
    });

    expect(shoppingListGateway.save).toHaveBeenCalled();
    const listSaved = shoppingListGateway.save.mock.calls[0][0] as ShoppingList;
    expect(listSaved.items).toHaveLength(0);
  });

  const setup = () => {
    const shoppingList = ShoppingList.create("fake list");
    const item = ShoppingItem.create("rice", 3);
    shoppingList.add(item);
    const shoppingListGateway = {
      save: jest.fn().mockResolvedValue({ id: "1111-2222-3333-4444" }),
      getById: jest.fn().mockResolvedValue(shoppingList),
    };
    const useCase = new RemoveItemsToShoppingListUseCase(shoppingListGateway);
    return {
      useCase,
      shoppingListGateway,
      item,
    };
  };
});
