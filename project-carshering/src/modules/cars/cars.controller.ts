import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {CarsService} from './cars.service';
import {Car} from './car.interface';

@Controller('cars')
export class CarsController{
	constructor (private carsService: CarsService){}
	@Get()
	getCars(){
		return this.carsService.findAll();
	}
	@Get(':state_number')
	getCar(@Param()params){
		console.log('Get car ', params.state_number);
		return this.carsService.findOne(params.state_number);
	}
	@Post()
	@HttpCode(204)
	createCar(@Body() car:Car){
		console.log('Create car ', car);
		return this.carsService.createCar(car);
	}
	@Put()
	updateCar(@Body() car:Car){
		console.log('Update car ', car);
		return this.carsService.updateCar(car);
	}
	@Delete(':state_number')
	deleteCar(@Param()params){
	console.log('Delete car ', params);	
	return this.carsService.remove(params.state_number);
	}
}