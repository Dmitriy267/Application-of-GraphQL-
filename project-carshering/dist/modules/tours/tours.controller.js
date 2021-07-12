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
exports.ToursController = void 0;
const common_1 = require("@nestjs/common");
const tours_service_1 = require("./tours.service");
let ToursController = class ToursController {
    constructor(toursService) {
        this.toursService = toursService;
    }
    getTours() {
        return this.toursService.findAll();
    }
    getTour(params) {
        console.log('Get tour ', params.state_number);
        return this.toursService.findOne(params.state_number);
    }
    createUser(tour) {
        console.log('Create tour ', tour);
        return this.toursService.createTour(tour);
    }
    updateTour(tour) {
        console.log('Update tour ', tour);
        return this.toursService.updateTour(tour);
    }
    deleteTour(params) {
        console.log('Delete tour ', params);
        return this.toursService.remove(params.state_number);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "getTours", null);
__decorate([
    common_1.Get(':state_number'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "getTour", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(204),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "createUser", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "updateTour", null);
__decorate([
    common_1.Delete(':state_number'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "deleteTour", null);
ToursController = __decorate([
    common_1.Controller('tours'),
    __metadata("design:paramtypes", [tours_service_1.ToursService])
], ToursController);
exports.ToursController = ToursController;
//# sourceMappingURL=tours.controller.js.map