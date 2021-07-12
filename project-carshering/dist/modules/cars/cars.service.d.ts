import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Car } from '../entity/car.entity';
export declare class CarsService {
    private carsRepository;
    constructor(carsRepository: Repository<Car>);
    findAll(): Promise<Car[]>;
    findOne(state_number: string): Promise<Car>;
    createCar(car: Car): Promise<Car>;
    updateCar(car: Car): Promise<UpdateResult>;
    remove(state_number: string): Promise<void>;
}
