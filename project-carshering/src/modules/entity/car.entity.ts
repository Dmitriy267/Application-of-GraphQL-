import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import {Car as CarAbstract} from '../../graphql';

@Entity()
export class Car implements CarAbstract{
	@PrimaryGeneratedColumn()
	state_number: string;
	
	@Column()
	owner: string;
	
	@Column()
	mark:string;
	
	@Column()
	model: string;
	
	@Column()
	years: number;
	
	@Column()
	description_auto: string;
	
	@Column()
	price_rental: string;
	
}