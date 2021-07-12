import {Injectable} from '@nestjs/common';
import {Tour} from '../entity/tour.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UpdateResult} from 'typeorm';

@Injectable()
export class ToursService{
	constructor(
	@InjectRepository(Tour)
	private toursRepository: Repository<Tour>,
	){}
	findAll():Promise<Tour[]>{
		return this.toursRepository.find();
	}
	
	findOne(state_number:string):Promise<Tour>{
		return this.toursRepository.findOne(state_number);
	}
	
	async createTour (tour: Tour):Promise<Tour>{
		return this.toursRepository.create(tour);
	}
	async updateTour (tour: Tour):Promise<UpdateResult>{
		return this.toursRepository.update({state_number:"A482AC"},{
			id_card: 1,
	rental_period: '2 days',
	provision: null,
	mark:'Kia',
	model: 'Sportage',
	price_rental: '2500 RUB/days',
			} );
	}
	
	async remove(state_number:string):Promise<void>{
		await this.toursRepository.delete(state_number);
	}
}
	