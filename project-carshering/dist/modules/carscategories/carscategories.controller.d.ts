import { CarsCategoriesService } from './carscategories.service';
import { CarsCategory } from './carscategory.interface';
export declare class CarsCategoriesController {
    private carscategoriesService;
    constructor(carscategoriesService: CarsCategoriesService);
    getCarsCategories(): Promise<import("../entity/carscategory.entity").CarsCategory[]>;
    getCarsCategory(params: any): Promise<import("../entity/carscategory.entity").CarsCategory>;
    createCarsCategory(carscategory: CarsCategory): Promise<import("../entity/carscategory.entity").CarsCategory>;
    updateCarsCategory(carscategory: CarsCategory): Promise<import("typeorm").UpdateResult>;
    deleteCarsCategory(params: any): Promise<void>;
}
