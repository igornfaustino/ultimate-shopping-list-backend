import { Entity } from "../common/Entity";
import { ShoppingItem } from "./Item";

export class ShoppingList extends Entity {
  name: string;
  items: ShoppingItem[];

  private constructor(name: string, items: ShoppingItem[], id?: string) {
    super(id);
    this.name = name;
    this.items = items;
  }

  public static create(name: string): ShoppingList;
  public static create(name: string, items: ShoppingItem[]): ShoppingList;
  public static create(name: string, items: ShoppingItem[] = []) {
    return new ShoppingList(name, items);
  }

  public static instantiate(id: string, name: string): ShoppingList;
  public static instantiate(
    id: string,
    name: string,
    items: ShoppingItem[]
  ): ShoppingList;
  public static instantiate(
    id: string,
    name: string,
    items: ShoppingItem[] = []
  ) {
    return new ShoppingList(name, items, id);
  }

  add(item: ShoppingItem) {
    const listItem = this.items.find((listItem) => listItem.id === item.id);
    if (!listItem) return this.items.push(item);
    listItem.quantity += item.quantity;
  }

  remove(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  checkAll() {
    this.items.forEach((item) => item.check());
  }

  uncheckAll() {
    this.items.forEach((item) => item.uncheck());
  }

  getItem(id: string) {
    return this.items.find((item) => item.id === id) ?? null;
  }
}
