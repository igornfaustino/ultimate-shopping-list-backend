import { Entity } from "../common/Entity";
import { Ingredient } from "./Ingredient";

export class Recipe extends Entity {
  private constructor(
    public name: string,
    public ingredients: Ingredient[] = [],
    public howToPrepare: string,
    id?: string
  ) {
    super(id);
  }

  static create(name: string): Recipe;
  static create(
    name: string,
    ingredients: Ingredient[],
    howToPrepare: string
  ): Recipe;
  static create(
    name: string,
    ingredients: Ingredient[] = [],
    howToPrepare: string = ""
  ) {
    return new Recipe(name, ingredients, howToPrepare);
  }

  static instantiate(id: string, name: string): Recipe;
  static instantiate(
    id: string,
    name: string,
    ingredients: Ingredient[],
    howToPrepare: string
  ): Recipe;
  static instantiate(
    id: string,
    name: string,
    ingredients: Ingredient[] = [],
    howToPrepare: string = ""
  ) {
    return new Recipe(name, ingredients, howToPrepare, id);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(id: string) {
    this.ingredients = this.ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
  }
}
