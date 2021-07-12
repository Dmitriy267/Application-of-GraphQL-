import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class User{
	@PrimaryGeneratedColumn()
	id_card: number;
	
	@Column()
	fullname: string;
	
	@Column()
	birth: string;
	
	@Column()
	passport:number;
	
	@Column()
	phone: number;
	
	@Column()
	mail: string;
	
	
	
}