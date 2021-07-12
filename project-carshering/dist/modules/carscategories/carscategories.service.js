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
exports.CarsCategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carscategory_entity_1 = require("../entity/carscategory.entity");
let CarsCategoriesService = class CarsCategoriesService {
    constructor(carscategoriesRepository) {
        this.carscategoriesRepository = carscategoriesRepository;
    }
    findAll() {
        return this.carscategoriesRepository.find();
    }
    findOne(id_unique) {
        return this.carscategoriesRepository.findOne(id_unique);
    }
    async createCarsCategory(carscategory) {
        return this.carscategoriesRepository.create(carscategory);
    }
    async updateCarsCategory(carscategory) {
        return this.carscategoriesRepository.update({ id_unique: 1 }, {
            state_number: 'A482AC',
            auto_category: 'B',
        });
    }
    async remove(id_unique) {
        await this.carscategoriesRepository.delete(id_unique);
    }
};
CarsCategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(carscategory_entity_1.CarsCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarsCategoriesService);
exports.CarsCategoriesService = CarsCategoriesService;
//# sourceMappingURL=carscategories.service.js.map