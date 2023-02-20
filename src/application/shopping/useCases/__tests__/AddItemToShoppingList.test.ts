import { ShoppingList } from "../../../../domain/shopping/List";
import { ShoppingListMissing } from "../../errors/ShoppingListMissing";
import { AddItemsToShoppingListUseCase } from "../AddItemsToShoppingList";

describe("CreateShoppingListUseCase", () => {
  it("should throw error if list is missing", async () => {
    const { useCase, shoppingListGateway } = setup();
    shoppingListGateway.getById.mockResolvedValueOnce(null);

    const promise = useCase.execute({
      listId: "any id",
      item: {
        name: "rice",
        quantity: 3,
      },
    });

    await expect(promise).rejects.toThrowError(ShoppingListMissing);
  });

  it("should add the new item", async () => {
    const { useCase, shoppingListGateway } = setup();

    await useCase.execute({
      listId: "any id",
      item: {
        name: "rice",
        quantity: 3,
      },
    });

    expect(shoppingListGateway.save).toHaveBeenCalled();
    const listSaved = shoppingListGateway.save.mock.calls[0][0] as ShoppingList;
    expect(listSaved.items).toHaveLength(1);
    expect(listSaved.items[0].name).toBe("rice");
    expect(listSaved.items[0].quantity).toBe(3);
  });

  const setup = () => {
    const shoppingListGateway = {
      save: jest.fn().mockResolvedValue({ id: "1111-2222-3333-4444" }),
      getById: jest.fn().mockResolvedValue(ShoppingList.create("fake list")),
    };
    const useCase = new AddItemsToShoppingListUseCase(shoppingListGateway);
    return {
      useCase,
      shoppingListGateway,
    };
  };
});
