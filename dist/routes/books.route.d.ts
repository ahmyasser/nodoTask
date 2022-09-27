import BooksController from '@controllers/books.controller';
import { Routes } from '@interfaces/routes.interface';
declare class BooksRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    booksController: BooksController;
    constructor();
    private initializeRoutes;
}
export default BooksRoute;
