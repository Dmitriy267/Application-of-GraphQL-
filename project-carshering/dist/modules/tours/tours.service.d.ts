import { Tour } from '../entity/tour.entity';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
export declare class ToursService {
    private toursRepository;
    constructor(toursRepository: Repository<Tour>);
    findAll(): Promise<Tour[]>;
    findOne(state_number: string): Promise<Tour>;
    createTour(tour: Tour): Promise<Tour>;
    updateTour(tour: Tour): Promise<UpdateResult>;
    remove(state_number: string): Promise<void>;
}
