import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { CategoryEntity } from './category.entity';
import { UpdateCategoryDTO } from './dto/update-category.dto';

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

  @Get('/:id')
  async show(@Param('id') id: string) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Category not Found');
    }

    return {
      data: category,
    };
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateCategoryDTO) {
    const category = await this.categoryRepository.updateById(id, data);

    return {
      data: category,
    };
  }
  @Delete('/:id')
  @HttpCode(204)
  async destroy(@Param('id') id: string) {
    const category = await this.categoryRepository.deleteById(id);

    return {
      data: category,
    };
  }
}
