import { ShoppingList } from "../../../domain/shopping/List";

export interface ShoppingListGateway {
  save(list: ShoppingList): Promise<{ id: string }>;
}
