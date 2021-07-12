"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const car_entity_1 = require("../entity/car.entity");
let CarsService = class CarsService {
    constructor(carsRepository) {
        this.carsRepository = carsRepository;
    }
    findAll() {
        return this.carsRepository.find();
    }
    findOne(state_number) {
        return this.carsRepository.findOne(state_number);
    }
    async createCar(car) {
        return this.carsRepository.create(car);
    }
    async updateCar(car) {
        return this.carsRepository.update({ state_number: "A482AC" }, {
            owner: 'Sidorov Nikolay Petrovich',
            mark: 'Kia',
            model: 'Sportage',
            years: 2017,
            description_auto: 'Car characteristics: automatic, all-wheel drive, diesel engine power 150 hp',
            price_rental: '2500 RUB/days',
        });
    }
    async remove(state_number) {
        await this.carsRepository.delete(state_number);
    }
};
CarsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(car_entity_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map