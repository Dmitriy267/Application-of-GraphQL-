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
exports.CarsCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const carscategories_service_1 = require("./carscategories.service");
let CarsCategoriesController = class CarsCategoriesController {
    constructor(carscategoriesService) {
        this.carscategoriesService = carscategoriesService;
    }
    getCarsCategories() {
        return this.carscategoriesService.findAll();
    }
    getCarsCategory(params) {
        console.log('Get carscategory ', params.id_unique);
        return this.carscategoriesService.findOne(Number(params.id_unique));
    }
    createCarsCategory(carscategory) {
        console.log('Create carscategory ', carscategory);
        return this.carscategoriesService.createCarsCategory(carscategory);
    }
    updateCarsCategory(carscategory) {
        console.log('Update  carscategory', carscategory);
        return this.carscategoriesService.updateCarsCategory(carscategory);
    }
    deleteCarsCategory(params) {
        console.log('Delete  carscategory', params);
        return this.carscategoriesService.remove(Number(params.id_unique));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarsCategoriesController.prototype, "getCarsCategories", null);
__decorate([
    common_1.Get(':id_unique'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsCategoriesController.prototype, "getCarsCategory", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(204),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsCategoriesController.prototype, "createCarsCategory", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsCategoriesController.prototype, "updateCarsCategory", null);
__decorate([
    common_1.Delete(':id_unique'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsCategoriesController.prototype, "deleteCarsCategory", null);
CarsCategoriesController = __decorate([
    common_1.Controller('carscategories'),
    __metadata("design:paramtypes", [carscategories_service_1.CarsCategoriesService])
], CarsCategoriesController);
exports.CarsCategoriesController = CarsCategoriesController;
//# sourceMappingURL=carscategories.controller.js.map