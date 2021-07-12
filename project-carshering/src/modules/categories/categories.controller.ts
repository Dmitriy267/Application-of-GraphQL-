import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {CategoriesService} from './categories.service';
import {Category} from './category.interface';
@Controller('categories')
export class CategoriesController{
	constructor (private categoriesService: CategoriesService){}
	@Get()
	getCategories(){
		return this.categoriesService.findAll();
	}
	@Get(':auto_category')
	getCategory(@Param()params){
		console.log('Get category ', params.auto_category);
		return this.categoriesService.findOne(params.auto_category);
	}
	@Post()
	@HttpCode(204)
	createCategory(@Body() category:Category){
		console.log('Create category ', category);
		return this.categoriesService.createCategory(category);
	}
	@Put()
	updateCategory(@Body() category:Category){
		console.log('Update category ', category);
		return this.categoriesService.updateCategory(category);
	}
	@Delete(':auto_category')
	deleteCategory(@Param()params){
	console.log('Delete category ', params);	
	return this.categoriesService.remove(params.auto_category);
	}
}