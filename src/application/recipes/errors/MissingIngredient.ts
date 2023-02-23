export class MissingIngredient extends Error {
  constructor(id: string) {
    super(`Missing ingredient with id ${id}`);
  }
}
