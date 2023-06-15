import { Controller, Get } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryRepository: CategoriesRepository) {}

  @Get()
  async index() {
    const categories = await this.categoryRepository.getAll();
    return {
      data: categories,
    };
  }
}
