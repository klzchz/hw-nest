export class CategoriesRepository {
  private categories: [] = [];
  async getAll() {
    return this.categories;
  }
}
