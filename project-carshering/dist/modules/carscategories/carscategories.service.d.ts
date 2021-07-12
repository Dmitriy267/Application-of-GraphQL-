import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { CarsCategory } from '../entity/carscategory.entity';
export declare class CarsCategoriesService {
    private carscategoriesRepository;
    constructor(carscategoriesRepository: Repository<CarsCategory>);
    findAll(): Promise<CarsCategory[]>;
    findOne(id_unique: number): Promise<CarsCategory>;
    createCarsCategory(carscategory: CarsCategory): Promise<CarsCategory>;
    updateCarsCategory(carscategory: CarsCategory): Promise<UpdateResult>;
    remove(id_unique: number): Promise<void>;
}
