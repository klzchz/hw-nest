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
import { ListCategoryDTO } from './dto/list-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryRepository: CategoriesRepository) {}

  @Get()
  async index() {
    const categories = await this.categoryRepository.getAll();

    const allCategories = categories.map(
      (category) =>
        new ListCategoryDTO(
          category.id,
          category.name,
          category.desc,
          category.date,
        ),
    );
    return {
      data: allCategories,
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
      data: new ListCategoryDTO(
        category.id,
        category.name,
        category.desc,
        category.date,
      ),
    };
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Category not Found');
    }

    return {
      data: new ListCategoryDTO(
        category.id,
        category.name,
        category.desc,
        category.date,
      ),
    };
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateCategoryDTO) {
    const category = await this.categoryRepository.updateById(id, data);

    return {
      data: new ListCategoryDTO(
        category.id,
        category.name,
        category.desc,
        category.date,
      ),
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
