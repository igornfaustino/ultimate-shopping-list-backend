import { Entity } from "../common/Entity";

export class Ingredient extends Entity {
  private constructor(public name: string, id?: string) {
    super(id);
  }

  static create(name: string) {
    return new Ingredient(name);
  }

  static instantiate(id: string, name: string) {
    return new Ingredient(name, id);
  }
}
