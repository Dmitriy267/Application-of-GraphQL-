import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { User } from '../entity/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id_card: number): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(user: User): Promise<UpdateResult>;
    remove(id_card: number): Promise<void>;
}
