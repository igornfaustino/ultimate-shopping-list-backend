import { Entity } from "../common/Entity";

export class ShoppingItem extends Entity {
  name: string;
  checked: boolean;
  quantity: number;

  private constructor(
    name: string,
    checked: boolean,
    quantity: number,
    id?: string
  ) {
    super(id);
    this.name = name;
    this.checked = checked;
    this.quantity = quantity;
  }

  public static instantiate(
    id: string,
    name: string,
    quantity: number
  ): ShoppingItem;
  public static instantiate(
    id: string,
    name: string,
    quantity: number,
    checked: boolean
  ): ShoppingItem;
  public static instantiate(
    id: string,
    name: string,
    quantity: number,
    checked: boolean = false
  ) {
    return new ShoppingItem(name, checked, quantity, id);
  }

  public static create(name: string, quantity: number): ShoppingItem;
  public static create(
    name: string,
    quantity: number,
    checked: boolean
  ): ShoppingItem;
  public static create(
    name: string,
    quantity: number,
    checked: boolean = false
  ) {
    return new ShoppingItem(name, checked, quantity);
  }

  toggle() {
    this.checked = !this.checked;
  }
}
