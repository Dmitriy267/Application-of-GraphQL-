import { Car as CarAbstract } from '../../graphql';
export declare class Car implements CarAbstract {
    state_number: string;
    owner: string;
    mark: string;
    model: string;
    years: number;
    description_auto: string;
    price_rental: string;
}
