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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsCategory = void 0;
const typeorm_1 = require("typeorm");
let CarsCategory = class CarsCategory {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CarsCategory.prototype, "id_unique", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CarsCategory.prototype, "state_number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CarsCategory.prototype, "auto_category", void 0);
CarsCategory = __decorate([
    typeorm_1.Entity()
], CarsCategory);
exports.CarsCategory = CarsCategory;
//# sourceMappingURL=carscategory.entity.js.map