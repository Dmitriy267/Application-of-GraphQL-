import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UpdateResult} from 'typeorm';
import {CarsCategory} from '../entity/carscategory.entity';

@Injectable()
export class CarsCategoriesService {
	constructor(
	@InjectRepository (CarsCategory)
	private carscategoriesRepository: Repository<CarsCategory>,
	){}
	findAll():Promise<CarsCategory[]>{
		return this.carscategoriesRepository.find();
	}
	
	findOne(id_unique:number):Promise<CarsCategory>{
		return this.carscategoriesRepository.findOne(id_unique);
	}
	
	async createCarsCategory (carscategory: CarsCategory):Promise<CarsCategory>{
		return this.carscategoriesRepository.create(carscategory);
	}
	async updateCarsCategory (carscategory: CarsCategory):Promise<UpdateResult>{
		return this.carscategoriesRepository.update({id_unique:1},{
			state_number: 'A482AC',
		auto_category: 'B',
			} );
	}
	
	async remove(id_unique:number):Promise<void>{
		await this.carscategoriesRepository.delete(id_unique);
	}
}
	