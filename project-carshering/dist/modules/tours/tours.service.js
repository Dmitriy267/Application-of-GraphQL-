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
exports.ToursService = void 0;
const common_1 = require("@nestjs/common");
const tour_entity_1 = require("../entity/tour.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ToursService = class ToursService {
    constructor(toursRepository) {
        this.toursRepository = toursRepository;
    }
    findAll() {
        return this.toursRepository.find();
    }
    findOne(state_number) {
        return this.toursRepository.findOne(state_number);
    }
    async createTour(tour) {
        return this.toursRepository.create(tour);
    }
    async updateTour(tour) {
        return this.toursRepository.update({ state_number: "A482AC" }, {
            id_card: 1,
            rental_period: '2 days',
            provision: null,
            mark: 'Kia',
            model: 'Sportage',
            price_rental: '2500 RUB/days',
        });
    }
    async remove(state_number) {
        await this.toursRepository.delete(state_number);
    }
};
ToursService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tour_entity_1.Tour)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ToursService);
exports.ToursService = ToursService;
//# sourceMappingURL=tours.service.js.map