import { CarsService } from '../modules/cars/cars.service';
export declare class CarResolver {
    private readonly carsService;
    constructor(carsService: CarsService);
    getCars(): Promise<import("../modules/entity/car.entity").Car[]>;
    findOneCar(state_number: string): Promise<import("../modules/entity/car.entity").Car>;
}
