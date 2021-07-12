import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Category{
	@PrimaryGeneratedColumn()
	auto_category: string;
	
	@Column()
	passenger_car: string;
	
	@Column()
	cargo_truck: string;
	
	@Column()
	minibuses: string;
	
	@Column()
	bike: string;
	
	
}