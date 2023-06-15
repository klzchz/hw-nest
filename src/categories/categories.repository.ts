import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesRepository {
  private categories: [] = [];
  async getAll() {
    return this.categories;
  }
}
