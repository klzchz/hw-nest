import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesRepository {
  private categories = [
    {
      id: 'uuid.xpto',
      name: 'test',
      desc: 'desc cat',
    },
  ];
  async getAll() {
    return this.categories;
  }
}
