import { Ingredient } from "../../../../domain/recipes/Ingredient";
import { Recipe } from "../../../../domain/recipes/Recipe";
import { MissingIngredient } from "../../errors/MissingIngredient";
import { CreateRecipeUseCase } from "../CreateRecipe";

describe("CreateRecipeUseCase", () => {
  it("should throw an error if ingredient doesn't exists", async () => {
    const { useCase, ingredientsGateway } = setup();
    ingredientsGateway.getById.mockResolvedValue(null);

    const promise = useCase.execute({
      name: "Fried rice",
      ingredients: [
        {
          id: "any id",
          quantity: 500,
        },
      ],
    });

    expect(promise).rejects.toThrowError(MissingIngredient);
  });

  it("should create a recipe", async () => {
    const { useCase, recipeGateway, ingredientsGateway } = setup();
    const ingredient = await ingredientsGateway.getById("any id");

    await useCase.execute({
      name: "Fried rice",
      ingredients: [
        {
          id: "any id",
          quantity: 500,
        },
      ],
    });

    expect(recipeGateway.save).toHaveBeenCalled();
    const savedRecipe = recipeGateway.save.mock.calls[0][0] as Recipe;
    expect(savedRecipe.ingredients[0].ingredientId).toBe("any id");
    expect(savedRecipe.ingredients[0].name).toBe(ingredient.name);
    expect(savedRecipe.ingredients[0].quantity).toBe(500);
  });

  const setup = () => {
    const ingredientsGateway = {
      getById: jest
        .fn()
        .mockImplementation(async (id: string) =>
          Ingredient.instantiate(id, "rice")
        ),
    };
    const recipeGateway = {
      save: jest.fn(),
    };
    const useCase = new CreateRecipeUseCase(ingredientsGateway, recipeGateway);
    return {
      useCase,
      ingredientsGateway,
      recipeGateway,
    };
  };
});
