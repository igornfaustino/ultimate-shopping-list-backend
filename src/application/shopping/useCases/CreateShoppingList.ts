import { ShoppingList } from "../../../domain/shopping/List";
import { ShoppingListGateway } from "../gateways/ShoppingListGateway";
import { UseCase } from "../../shared/useCases/UseCase";

export class CreateShoppingListUseCase
  implements UseCase<Input, Promise<Output>>
{
  constructor(
    private readonly shoppingListGateway: Pick<ShoppingListGateway, "save">
  ) {}

  async execute(input: Input): Promise<Output> {
    const list = ShoppingList.create(input.name);
    const { id } = await this.shoppingListGateway.save(list);
    return new Output(id);
  }
}

export type Input = {
  name: string;
};

export class Output {
  constructor(readonly id: string) {}
}
