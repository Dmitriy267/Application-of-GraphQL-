import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Tour{
	@PrimaryGeneratedColumn()
	state_number: string;
	
	@Column()
	id_card: number;
	
	@Column()
	rental_period: string;
	
	@Column()
	provision: string;
	
	@Column()
	mark:string;
	
	@Column()
	model: string;
	
	@Column()
	price_rental: string;
	
}