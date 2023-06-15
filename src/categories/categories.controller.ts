import { Controller, Get } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryRepository: CategoriesRepository) {}

  @Get()
  listAll() {
    return {
      data: this.categoryRepository.getAll(),
    };
  }
}
