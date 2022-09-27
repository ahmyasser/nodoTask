import { Currency, Rating } from '../interfaces/books.interface';
import { Schema } from 'mongoose';
declare class Review {
    user: Schema.Types.ObjectId;
    likes: number;
    replies: Review;
    content: string;
    imageURL: string;
    rating: Rating;
}
declare class Book {
    type: string;
    authors: string[];
    publisher: string;
    isVirtual: boolean;
    edition: string;
    price: number;
    currency: Currency;
    reviews: Review[];
    rating: Rating;
    createdAt?: Date;
    updatedAt?: Date;
}
declare class BookItem extends Book {
    numberOfCopies: number;
    qrCode: string;
}
declare const BookModel: import("@typegoose/typegoose").ReturnModelType<typeof BookItem, import("@typegoose/typegoose/lib/types").BeAnObject>;
export default BookModel;
