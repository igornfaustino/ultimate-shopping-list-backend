import { Entity } from "../common/Entity";

export class RecipeItem extends Entity {
  private constructor(
    public ingredientId: string,
    public name: string,
    public quantity: number,
    id?: string
  ) {
    super(id);
  }

  static create(ingredientId: string, name: string, quantity: number) {
    return new RecipeItem(ingredientId, name, quantity);
  }

  static instantiate(
    id: string,
    ingredientId: string,
    name: string,
    quantity: number
  ) {
    return new RecipeItem(ingredientId, name, quantity, id);
  }
}
