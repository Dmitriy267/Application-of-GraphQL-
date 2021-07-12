import { Resolver, Query, Args } from '@nestjs/graphql';
import {CarsService} from '../modules/cars/cars.service';


@Resolver()
export class CarResolver {
	constructor (private readonly carsService: CarsService){}
	@Query()
	getCars(){
		return this.carsService.findAll();
	}
	@Query()
	findOneCar (@Args('state_number') state_number: string){
		return this.carsService.findOne (state_number);
	}
}
