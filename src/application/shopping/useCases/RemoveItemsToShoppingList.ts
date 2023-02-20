import { ShoppingItem } from "../../../domain/shopping/Item";
import { ShoppingListGateway } from "../../shared/gateways/ShoppingListGateway";
import { UseCase } from "../../shared/useCases/UseCase";
import { ShoppingListMissing } from "../errors/ShoppingListMissing";

export class RemoveItemsToShoppingListUseCase
  implements UseCase<Input, Promise<Output>>
{
  constructor(
    readonly shoppingListGateway: Pick<ShoppingListGateway, "save" | "getById">
  ) {}

  async execute(input: Input): Promise<Output> {
    const list = await this.shoppingListGateway.getById(input.listId);

    if (!list) throw new ShoppingListMissing(input.listId);

    list.remove(input.itemId);
    this.shoppingListGateway.save(list);
    return new Output(true);
  }
}

export type Input = {
  listId: string;
  itemId: string;
};

export class Output {
  constructor(readonly success: boolean) {}
}
