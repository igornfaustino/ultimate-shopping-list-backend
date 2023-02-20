export class ShoppingItemMissing extends Error {
  constructor(itemId: string) {
    super(`Shopping item ${itemId} not found`);
  }
}
