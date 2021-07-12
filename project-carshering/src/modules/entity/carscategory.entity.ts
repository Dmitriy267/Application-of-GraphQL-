import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class CarsCategory{
	@PrimaryGeneratedColumn()
	id_unique: number;
	
	@Column()
	state_number: string;
	
	@Column()
	auto_category: string;
	
}