import { Currency, Rating } from '@/interfaces/books.interface';
export declare class CreateBookDto {
    type: string;
    authors: string[];
    publisher: string;
    numberOfCopies: number;
    isVirtual: boolean;
    edition: string;
    price: number;
    currency: Currency;
}
export declare class UpdateBookReviewDto {
    user: string;
    likes: number;
    content: string;
    imageURL: string;
    rating: Rating;
}
