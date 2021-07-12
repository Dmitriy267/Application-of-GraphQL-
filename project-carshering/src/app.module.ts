import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from './modules/users/users.module';
import {ToursModule} from './modules/tours/tours.module';
import {CarsModule} from './modules/cars/cars.module';
import {CarsCategoriesModule} from './modules/carscategories/carscategories.module';
import {CategoriesModule} from './modules/categories/categories.module';
import {GraphQLModule} from '@nestjs/graphql';
import {join} from 'path';
import { CarResolver } from './car/car.resolver';


@Module({
  imports: [
  UsersModule,
  ToursModule,
  CarsModule,
  CarsCategoriesModule,
  CategoriesModule,
  GraphQLModule.forRoot({
	  typePaths: ['./**/*.graphql'],
	  definitions: {
		  path: join(process.cwd(), '/src/graphql.ts'),
	  },
  }),
  TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, CarResolver],
})
export class AppModule {}
