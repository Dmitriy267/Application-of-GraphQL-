import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UpdateResult} from 'typeorm';
import {Category} from '../entity/category.entity';

@Injectable()
export class CategoriesService{
	constructor(
	@InjectRepository (Category)
	
	private categoriesRepository: Repository<Category>,
	){}
	findAll():Promise<Category[]>{
		return this.categoriesRepository.find();
	}
	
	findOne(auto_category:string):Promise<Category>{
		return this.categoriesRepository.findOne(auto_category);
	}
	
	async createCategory (category: Category):Promise<Category>{
		return this.categoriesRepository.create(category);
	}
	async updateCategory (category: Category):Promise<UpdateResult>{
		return this.categoriesRepository.update({auto_category:"B"},{
			passenger_car:"B, E",
			cargo_truck: "C, CE",
			minibuses: "D",
			bike: "A",
			
			} );
	}
	
	async remove(auto_category:string):Promise<void>{
		await this.categoriesRepository.delete(auto_category);
	}
}
	
	