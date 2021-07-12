import { ToursService } from './tours.service';
import { Tour } from './tour.interface';
export declare class ToursController {
    private toursService;
    constructor(toursService: ToursService);
    getTours(): Promise<import("../entity/tour.entity").Tour[]>;
    getTour(params: any): Promise<import("../entity/tour.entity").Tour>;
    createUser(tour: Tour): Promise<import("../entity/tour.entity").Tour>;
    updateTour(tour: Tour): Promise<import("typeorm").UpdateResult>;
    deleteTour(params: any): Promise<void>;
}
