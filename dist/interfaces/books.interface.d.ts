import { User } from './users.interface';
export declare enum Currency {
    USD = "usd",
    EUR = "eur",
    EGP = "egp",
    GBP = "gbp"
}
export declare enum Rating {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5
}
export interface Review {
    _id: string;
    user: User;
    likes: number;
    replies: Review;
    content: string;
    imageURL: string;
    rating: Rating;
}
export interface Book {
    _id: string;
    type: string;
    authors: string[];
    publisher: string;
    imageURL: string;
    isVirtual: boolean;
    edition: string;
    currency: Currency;
    rating: Rating;
    reviews: Review[];
    price: number;
}
export interface BookItem extends Book {
    numberOfCopies: number;
    qrCode: string;
}
