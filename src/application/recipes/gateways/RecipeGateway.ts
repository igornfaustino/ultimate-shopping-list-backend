import { Recipe } from "../../../domain/recipes/Recipe";

export interface RecipeGateway {
  save(recipe: Recipe): Promise<void>;
}
