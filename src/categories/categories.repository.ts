import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoriesRepository {
  private categories: CategoryEntity[] = [];

  async getAll(): Promise<CategoryEntity[]> {
    return this.categories;
  }
  async create(category: CategoryEntity): Promise<CategoryEntity> {
    this.categories.push(category);
    return category;
  }
}
