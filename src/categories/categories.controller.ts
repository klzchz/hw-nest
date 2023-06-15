import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async store(@Body() dataCategory) {
    const category = await this.categoryRepository.create(dataCategory);
    return {
      data: category,
    };
  }
}
