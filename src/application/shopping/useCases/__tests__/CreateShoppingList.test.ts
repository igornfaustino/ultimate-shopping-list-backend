import { CreateShoppingListUseCase } from "../CreateShoppingList";

describe("CreateShoppingListUseCase", () => {
  it("should save a new list", async () => {
    const { fakeListId, useCase } = setup();

    const output = await useCase.execute({ name: "new list" });

    expect(output.id).toBe(fakeListId);
  });

  const setup = () => {
    const fakeListId = "11111-22222-33333-44444";
    const shoppingListGateway = {
      save: jest.fn().mockResolvedValue({ id: fakeListId }),
    };
    const useCase = new CreateShoppingListUseCase(shoppingListGateway);
    return {
      useCase,
      shoppingListGateway,
      fakeListId,
    };
  };
});
