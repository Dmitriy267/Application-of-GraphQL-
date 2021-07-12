import { Module } from '@nestjs/common';
import {CarsCategoriesController} from './carscategories.controller';
import {CarsCategoriesService} from './carscategories.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CarsCategory} from '../entity/carscategory.entity';



@Module({
  imports: [TypeOrmModule.forFeature([CarsCategory])],
  controllers: [CarsCategoriesController],
  providers: [CarsCategoriesService],
})
export class CarsCategoriesModule {}