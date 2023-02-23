import { Recipe } from "../../../domain/recipes/Recipe";
import { UseCase } from "../../shared/useCases/UseCase";
import { MissingIngredient } from "../errors/MissingIngredient";
import { IngredientGateway } from "../gateways/IngredientGateway";
import { RecipeGateway } from "../gateways/RecipeGateway";

export class CreateRecipeUseCase implements UseCase<Input, Promise<Output>> {
  constructor(
    private readonly ingredientGateway: IngredientGateway,
    private readonly recipeGateway: RecipeGateway
  ) {}

  async execute(input: Input): Promise<Output> {
    const recipe = Recipe.create(input.name);
    for (const { id, quantity } of input.ingredients) {
      const ingredient = await this.ingredientGateway.getById(id);
      if (!ingredient) throw new MissingIngredient(id);
      recipe.addIngredient(ingredient, quantity);
    }
    this.recipeGateway.save(recipe);
    return new Output();
  }
}

type Input = {
  name: string;
  ingredients: {
    id: string;
    quantity: number;
  }[];
};

export class Output {}
