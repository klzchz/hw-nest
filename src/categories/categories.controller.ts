import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { CategoryEntity } from './category.entity';

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
  async store(@Body() dataCategory: CreateCategoryDTO) {
    const categoryEntity = new CategoryEntity(
      dataCategory.name,
      dataCategory.desc,
    );
    const category = await this.categoryRepository.create(categoryEntity);
    return {
      data: category,
    };
  }
}
