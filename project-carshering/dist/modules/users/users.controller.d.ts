import { UsersService } from './users.service';
import { User } from './user.interface';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import("../entity/user.entity").User[]>;
    getUser(params: any): Promise<import("../entity/user.entity").User>;
    createUser(user: User): Promise<import("../entity/user.entity").User>;
    updateUser(user: User): Promise<import("typeorm").UpdateResult>;
    deleteUser(params: any): Promise<void>;
}
