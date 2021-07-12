import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UpdateResult} from 'typeorm';
import {Car} from '../entity/car.entity';


@Injectable()
export class CarsService {
	constructor(
	@InjectRepository(Car)
	private carsRepository: Repository<Car>,
	){}
	findAll():Promise<Car[]>{
		return this.carsRepository.find();
	}
	
	findOne(state_number:string):Promise<Car>{
		return this.carsRepository.findOne(state_number);
	}
	
	async createCar (car: Car):Promise<Car>{
		return this.carsRepository.create(car);
	}
	async updateCar (car: Car):Promise<UpdateResult>{
		return this.carsRepository.update({state_number:"A482AC"},{
			owner: 'Sidorov Nikolay Petrovich',
	mark:'Kia',
	model: 'Sportage',
	years: 2017,
	description_auto: 'Car characteristics: automatic, all-wheel drive, diesel engine power 150 hp',
	price_rental: '2500 RUB/days',
			} );
	}
	
	async remove(state_number:string):Promise<void>{
		await this.carsRepository.delete(state_number);
	}
}
	