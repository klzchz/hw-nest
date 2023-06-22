import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoriesRepository {
  private categories: CategoryEntity[] = [];

  constructor() {
    this.categories.push(new CategoryEntity('name', 'desc'));
  }

  async getAll(): Promise<CategoryEntity[]> {
    return this.categories;
  }
  async create(category: CategoryEntity): Promise<CategoryEntity> {
    this.categories.push(category);
    return category;
  }

  async findById(id: string): Promise<CategoryEntity | undefined> {
    return this.categories.find((category) => category.id === id);
  }
}
