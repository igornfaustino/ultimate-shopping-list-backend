import { ShoppingItem } from "./Item";

export class ShoppingList {
  name: string;
  items: ShoppingItem[];

  private constructor(name: string, items: ShoppingItem[]) {
    this.name = name;
    this.items = items;
  }

  public static create(name: string): ShoppingList;
  public static create(name: string, items: ShoppingItem[]): ShoppingList;
  public static create(name: string, items: ShoppingItem[] = []) {
    return new ShoppingList(name, items);
  }

  add(item: ShoppingItem) {
    this.items.push(item);
  }
}
