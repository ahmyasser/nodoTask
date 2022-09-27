"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const books_controller_1 = tslib_1.__importDefault(require("../controllers/books.controller"));
const books_dto_1 = require("../dtos/books.dto");
const validation_middleware_1 = tslib_1.__importDefault(require("../middlewares/validation.middleware"));
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
class BooksRoute {
    constructor() {
        this.path = '/books';
        this.router = (0, express_1.Router)();
        this.booksController = new books_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, auth_middleware_1.default, this.booksController.getBooks);
        this.router.get(`${this.path}/:id`, this.booksController.getBookById);
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(books_dto_1.CreateBookDto, 'body'), this.booksController.createBook);
        this.router.put(`${this.path}/:id`, (0, validation_middleware_1.default)(books_dto_1.CreateBookDto, 'body', true), this.booksController.updateBook);
        this.router.put(`${this.path}/review/:id`, (0, validation_middleware_1.default)(books_dto_1.UpdateBookReviewDto, 'body', true), auth_middleware_1.default, this.booksController.addBookReview);
        this.router.delete(`${this.path}/:id`, this.booksController.deleteBook);
    }
}
exports.default = BooksRoute;
//# sourceMappingURL=books.route.js.map