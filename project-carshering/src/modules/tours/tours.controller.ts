import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {ToursService} from './tours.service';
import {Tour} from './tour.interface';

@Controller('tours')
export class ToursController{
	constructor (private toursService: ToursService){}
	@Get()
	getTours(){
		return this.toursService.findAll();
	}
	@Get(':state_number')
	getTour(@Param()params){
		console.log('Get tour ', params.state_number);
		return this.toursService.findOne(params.state_number);
	}
	@Post()
	@HttpCode(204)
	createUser(@Body() tour:Tour){
		console.log('Create tour ', tour);
		return this.toursService.createTour(tour);
	}
	@Put()
	updateTour(@Body() tour:Tour){
		console.log('Update tour ', tour);
		return this.toursService.updateTour(tour);
	}
	@Delete(':state_number')
	deleteTour(@Param()params){
	console.log('Delete tour ', params);	
	return this.toursService.remove(params.state_number);
	}
}