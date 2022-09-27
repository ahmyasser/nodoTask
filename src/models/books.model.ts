import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { Currency, Rating } from '@/interfaces/books.interface';
import { Schema } from 'mongoose';

class Review {
  @prop({ type: Schema.Types.ObjectId, ref: 'User' })
  user: Schema.Types.ObjectId;
  @prop({ type: Number })
  likes: number;
  replies: Review;
  @prop({ type: String })
  content: string;
  @prop({ type: String })
  imageURL: string;
  rating: Rating;
}
class Book {
  @prop({ type: String })
  public type: string;

  @prop({ type: String })
  public authors: string[];

  @prop({ type: String })
  public publisher: string;

  @prop({ type: Boolean })
  public isVirtual: boolean;

  @prop({ type: String })
  public edition: string;

  @prop({ type: Number })
  public price: number;

  @prop({ type: String })
  public currency: Currency;

  @prop({ type: [Review] })
  public reviews: Review[];

  public rating: Rating;

  public createdAt?: Date;
  public updatedAt?: Date;
}
@modelOptions({ schemaOptions: { collection: 'books', timestamps: true } })
class BookItem extends Book {
  @prop({ type: Number })
  public numberOfCopies: number;

  @prop({ type: String })
  public qrCode: string;
}

const BookModel = getModelForClass(BookItem);

export default BookModel;
