import { Entity } from "../common/Entity";
import { Ingredient } from "./Ingredient";
import { RecipeItem } from "./RecipeItem";

export class Recipe extends Entity {
  private constructor(
    public name: string,
    public ingredients: RecipeItem[] = [],
    public howToPrepare: string,
    id?: string
  ) {
    super(id);
  }

  static create(name: string): Recipe;
  static create(
    name: string,
    ingredients: RecipeItem[],
    howToPrepare: string
  ): Recipe;
  static create(
    name: string,
    ingredients: RecipeItem[] = [],
    howToPrepare: string = ""
  ) {
    return new Recipe(name, ingredients, howToPrepare);
  }

  static instantiate(id: string, name: string): Recipe;
  static instantiate(
    id: string,
    name: string,
    ingredients: RecipeItem[],
    howToPrepare: string
  ): Recipe;
  static instantiate(
    id: string,
    name: string,
    ingredients: RecipeItem[] = [],
    howToPrepare: string = ""
  ) {
    return new Recipe(name, ingredients, howToPrepare, id);
  }

  addIngredient(ingredient: Ingredient, quantity: number) {
    this.ingredients.push(
      RecipeItem.create(ingredient.id, ingredient.name, quantity)
    );
  }

  removeIngredient(id: string) {
    this.ingredients = this.ingredients.filter(
      (ingredient) => ingredient.ingredientId !== id
    );
  }
}
