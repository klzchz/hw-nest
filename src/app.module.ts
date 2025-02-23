import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.modules';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CategoriesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
