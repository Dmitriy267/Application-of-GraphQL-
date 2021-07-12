import { CategoriesService } from './categories.service';
import { Category } from './category.interface';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<import("../entity/category.entity").Category[]>;
    getCategory(params: any): Promise<import("../entity/category.entity").Category>;
    createCategory(category: Category): Promise<import("../entity/category.entity").Category>;
    updateCategory(category: Category): Promise<import("typeorm").UpdateResult>;
    deleteCategory(params: any): Promise<void>;
}
