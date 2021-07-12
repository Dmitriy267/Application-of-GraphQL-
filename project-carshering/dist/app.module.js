"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const tours_module_1 = require("./modules/tours/tours.module");
const cars_module_1 = require("./modules/cars/cars.module");
const carscategories_module_1 = require("./modules/carscategories/carscategories.module");
const categories_module_1 = require("./modules/categories/categories.module");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const car_resolver_1 = require("./car/car.resolver");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            tours_module_1.ToursModule,
            cars_module_1.CarsModule,
            carscategories_module_1.CarsCategoriesModule,
            categories_module_1.CategoriesModule,
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                definitions: {
                    path: path_1.join(process.cwd(), '/src/graphql.ts'),
                },
            }),
            typeorm_1.TypeOrmModule.forRoot()
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, car_resolver_1.CarResolver],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map