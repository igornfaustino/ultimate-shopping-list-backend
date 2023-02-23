import { ShoppingItem } from "../../../domain/shopping/Item";
import { ShoppingListGateway } from "../gateways/ShoppingListGateway";
import { UseCase } from "../../shared/useCases/UseCase";
import { ShoppingListMissing } from "../errors/ShoppingListMissing";

export class AddItemsToShoppingListUseCase
  implements UseCase<Input, Promise<Output>>
{
  constructor(
    readonly shoppingListGateway: Pick<ShoppingListGateway, "save" | "getById">
  ) {}

  async execute(input: Input): Promise<Output> {
    const list = await this.shoppingListGateway.getById(input.listId);

    if (!list) throw new ShoppingListMissing(input.listId);

    const item = ShoppingItem.create(input.item.name, input.item.quantity);
    list.add(item);
    this.shoppingListGateway.save(list);
    return new Output(item.id);
  }
}

export type Input = {
  listId: string;
  item: {
    name: string;
    quantity: number;
  };
};

export class Output {
  constructor(readonly id: string) {}
}
