import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

@modelOptions({ schemaOptions: { collection: 'users', timestamps: true } })
class User {
  @prop({ type: String, required: true, unique: true })
  public email: string;

  @prop({ type: String, required: true })
  public password: string;

  @prop({ type: Schema.Types.ObjectId, ref: 'books' })
  public cart: [];

  public createdAt?: Date;

  public updatedAt?: Date;
}

const UserModel = getModelForClass(User);

export default UserModel;
