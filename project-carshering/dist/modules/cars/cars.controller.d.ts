import { CarsService } from './cars.service';
import { Car } from './car.interface';
export declare class CarsController {
    private carsService;
    constructor(carsService: CarsService);
    getCars(): Promise<import("../entity/car.entity").Car[]>;
    getCar(params: any): Promise<import("../entity/car.entity").Car>;
    createCar(car: Car): Promise<import("../entity/car.entity").Car>;
    updateCar(car: Car): Promise<import("typeorm").UpdateResult>;
    deleteCar(params: any): Promise<void>;
}
