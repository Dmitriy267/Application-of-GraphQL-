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
exports.Tour = void 0;
const typeorm_1 = require("typeorm");
let Tour = class Tour {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Tour.prototype, "state_number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Tour.prototype, "id_card", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tour.prototype, "rental_period", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tour.prototype, "provision", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tour.prototype, "mark", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tour.prototype, "model", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tour.prototype, "price_rental", void 0);
Tour = __decorate([
    typeorm_1.Entity()
], Tour);
exports.Tour = Tour;
//# sourceMappingURL=tour.entity.js.map