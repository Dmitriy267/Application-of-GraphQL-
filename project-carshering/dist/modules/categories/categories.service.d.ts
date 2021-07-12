import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Category } from '../entity/category.entity';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(auto_category: string): Promise<Category>;
    createCategory(category: Category): Promise<Category>;
    updateCategory(category: Category): Promise<UpdateResult>;
    remove(auto_category: string): Promise<void>;
}
