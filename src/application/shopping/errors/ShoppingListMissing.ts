export class ShoppingListMissing extends Error {
  constructor(listId: string) {
    super(`Shopping list ${listId} not found`);
  }
}
