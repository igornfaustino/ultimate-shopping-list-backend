import { Entity } from "../common/Entity";

export class Ingredient extends Entity {
  private constructor(
    public name: string,
    public quantity: number,
    id?: string
  ) {
    super(id);
  }

  static create(name: string, quantity: number) {
    return new Ingredient(name, quantity);
  }

  static instantiate(id: string, name: string, quantity: number) {
    return new Ingredient(name, quantity, id);
  }
}
