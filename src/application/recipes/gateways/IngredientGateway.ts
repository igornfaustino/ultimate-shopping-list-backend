import { Ingredient } from "../../../domain/recipes/Ingredient";

export interface IngredientGateway {
  getById(id: string): Promise<Ingredient | null>;
}
