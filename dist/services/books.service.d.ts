/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateBookDto, UpdateBookReviewDto } from '@dtos/books.dto';
import { Book } from '@interfaces/books.interface';
declare class BookService {
    books: import("@typegoose/typegoose").ReturnModelType<{
        new (): {
            numberOfCopies: number;
            qrCode: string;
            type: string;
            authors: string[];
            publisher: string;
            isVirtual: boolean;
            edition: string;
            price: number;
            currency: import("@interfaces/books.interface").Currency;
            reviews: {
                user: import("mongoose").Schema.Types.ObjectId;
                likes: number;
                replies: any;
                content: string;
                imageURL: string;
                rating: import("@interfaces/books.interface").Rating;
            }[];
            rating: import("@interfaces/books.interface").Rating;
            createdAt?: Date;
            updatedAt?: Date;
        };
    }, import("@typegoose/typegoose/lib/types").BeAnObject>;
    findAllBook(): Promise<Book[]>;
    findBookById(bookId: string): Promise<Book>;
    createBook(bookData: CreateBookDto): Promise<Book>;
    updateBook(bookId: string, bookData: CreateBookDto): Promise<Book>;
    updateBookReview(bookId: string, reviewData: UpdateBookReviewDto): Promise<Book>;
    deleteBook(bookId: string): Promise<Book>;
}
export default BookService;
