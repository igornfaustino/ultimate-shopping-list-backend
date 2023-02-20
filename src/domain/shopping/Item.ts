export class ShoppingItem {
  name: string;
  checked: boolean;
  quantity: number;

  constructor(name: string, checked: boolean, quantity: number) {
    this.name = name;
    this.checked = checked;
    this.quantity = quantity;
  }

  toggle() {
    this.checked = !this.checked;
  }
}
