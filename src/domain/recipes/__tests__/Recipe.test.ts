import { Ingredient } from "../Ingredient";
import { Recipe } from "../Recipe";

describe("Recipe", () => {
  it("should add ingredient to a recipe", () => {
    const { recipe } = setup();

    const rice = Ingredient.create("Rice", 500);
    recipe.addIngredient(rice);

    expect(recipe.ingredients[0]).toEqual(rice);
  });

  it("should remove ingredient to a recipe", () => {
    const { recipe } = setup();
    const rice = Ingredient.create("Rice", 500);
    recipe.addIngredient(rice);

    recipe.removeIngredient(rice.id);

    expect(recipe.ingredients).toHaveLength(0);
  });

  const setup = () => {
    const recipe = Recipe.create("Fried rice");
    return {
      recipe,
    };
  };
});
