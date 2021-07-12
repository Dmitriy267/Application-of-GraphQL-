export interface Car {
    state_number: string;
    owner?: Nullable<string>;
    mark: string;
    model: string;
    years?: Nullable<number>;
    description_auto?: Nullable<string>;
    price_rental: string;
}
export interface IQuery {
    getCars(): Car[] | Promise<Car[]>;
}
declare type Nullable<T> = T | null;
export {};
