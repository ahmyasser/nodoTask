import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
declare class UserService {
    users: import("@typegoose/typegoose").ReturnModelType<{
        new (): {
            email: string;
            password: string;
            cart: [];
            createdAt?: Date;
            updatedAt?: Date;
        };
    }, import("@typegoose/typegoose/lib/types").BeAnObject>;
    findAllUser(): Promise<User[]>;
    findUserById(userId: string): Promise<User>;
    createUser(userData: CreateUserDto): Promise<User>;
    updateUser(userId: string, userData: CreateUserDto): Promise<User>;
    deleteUser(userId: string): Promise<User>;
}
export default UserService;
