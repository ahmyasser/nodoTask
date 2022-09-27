import { Router } from 'express';
import BooksController from '@controllers/books.controller';
import { CreateBookDto, UpdateBookReviewDto } from '@dtos/books.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@middlewares/auth.middleware';

class BooksRoute implements Routes {
  public path = '/books';
  public router = Router();
  public booksController = new BooksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.booksController.getBooks);
    this.router.get(`${this.path}/:id`, this.booksController.getBookById);
    this.router.post(`${this.path}`, validationMiddleware(CreateBookDto, 'body'), this.booksController.createBook);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateBookDto, 'body', true), this.booksController.updateBook);
    this.router.put(
      `${this.path}/review/:id`,
      validationMiddleware(UpdateBookReviewDto, 'body', true),
      authMiddleware,
      this.booksController.addBookReview,
    );
    this.router.delete(`${this.path}/:id`, this.booksController.deleteBook);
  }
}

export default BooksRoute;
