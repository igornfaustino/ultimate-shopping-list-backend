import { ShoppingListGateway } from "../../shared/gateways/ShoppingListGateway";
import { UseCase } from "../../shared/useCases/UseCase";
import { ShoppingItemMissing } from "../errors/ShoppingItemMissing";
import { ShoppingListMissing } from "../errors/ShoppingListMissing";

export class ToggleItemUseCase implements UseCase<Input, Promise<Output>> {
  constructor(
    readonly shoppingListGateway: Pick<ShoppingListGateway, "save" | "getById">
  ) {}

  async execute(input: Input): Promise<Output> {
    const list = await this.shoppingListGateway.getById(input.listId);

    if (!list) throw new ShoppingListMissing(input.listId);

    const item = list.getItem(input.itemId);

    if (!item) throw new ShoppingItemMissing(input.itemId);

    item.toggle();
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
