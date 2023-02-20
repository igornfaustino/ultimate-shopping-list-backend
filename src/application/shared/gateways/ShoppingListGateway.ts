import { ShoppingList } from "../../../domain/shopping/List";

export interface ShoppingListGateway {
  getById(id: string): Promise<ShoppingList | null>;
  save(list: ShoppingList): Promise<{ id: string }>;
}
