import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UpdateResult} from 'typeorm';
import {User} from '../entity/user.entity';

@Injectable()
export class UsersService {
	constructor(
	@InjectRepository(User)
	private usersRepository: Repository<User>,
	){}
	
	findAll():Promise<User[]>{
		return this.usersRepository.find();
	}
	
	findOne(id_card:number):Promise<User>{
		return this.usersRepository.findOne(id_card);
	}
	
	async createUser (user: User):Promise<User>{
		return this.usersRepository.create(user);
	}
	async updateUser (user: User):Promise<UpdateResult>{
		return this.usersRepository.update({id_card:1},{
			fullname: "Ivanov Ivan Ivanovich",
			birth: '12.09.65',
			passport:3917935871,
			phone: 89271178663,
			mail: 'Ivanov65@mail.ru',
			} );
	}
	
	async remove(id_card:number):Promise<void>{
		await this.usersRepository.delete(id_card);
	}
}
	
