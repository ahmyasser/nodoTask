import { NextFunction, Request, Response } from 'express';
import bookService from '@services/books.service';
declare class BooksController {
    bookService: bookService;
    getBooks: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getBookById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    addBookReview: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default BooksController;
