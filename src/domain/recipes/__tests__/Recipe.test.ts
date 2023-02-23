import { Ingredient } from "../Ingredient";
import { Recipe } from "../Recipe";

describe("Recipe", () => {
  it("should add ingredient to a recipe", () => {
    const { recipe } = setup();

    const rice = Ingredient.create("Rice");
    recipe.addIngredient(rice, 500);

    expect(recipe.ingredients[0].ingredientId).toEqual(rice.id);
    expect(recipe.ingredients[0].name).toEqual(rice.name);
    expect(recipe.ingredients[0].quantity).toEqual(500);
  });

  it("should remove ingredient to a recipe", () => {
    const { recipe } = setup();
    const rice = Ingredient.create("Rice");
    recipe.addIngredient(rice, 500);

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
