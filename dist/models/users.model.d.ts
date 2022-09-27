declare class User {
    email: string;
    password: string;
    cart: [];
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UserModel: import("@typegoose/typegoose").ReturnModelType<typeof User, import("@typegoose/typegoose/lib/types").BeAnObject>;
export default UserModel;
