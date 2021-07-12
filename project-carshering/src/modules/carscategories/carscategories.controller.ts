import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {CarsCategoriesService} from './carscategories.service';
import {CarsCategory} from './carscategory.interface';

@Controller('carscategories')
export class CarsCategoriesController{
	constructor (private carscategoriesService: CarsCategoriesService){}
	@Get()
	getCarsCategories(){
		return this.carscategoriesService.findAll();
	}
	@Get(':id_unique')
	getCarsCategory(@Param()params){
		console.log('Get carscategory ', params.id_unique);
		return this.carscategoriesService.findOne(Number(params.id_unique));
	}
	@Post()
	@HttpCode(204)
	createCarsCategory(@Body() carscategory:CarsCategory){
		console.log('Create carscategory ', carscategory);
		return this.carscategoriesService.createCarsCategory(carscategory);
	}
	@Put()
	updateCarsCategory(@Body() carscategory:CarsCategory){
		console.log('Update  carscategory', carscategory);
		return this.carscategoriesService.updateCarsCategory(carscategory);
	}
	@Delete(':id_unique')
	deleteCarsCategory(@Param()params){
	console.log('Delete  carscategory', params);	
	return this.carscategoriesService.remove(Number(params.id_unique));
	}
}