"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const books_service_1 = tslib_1.__importDefault(require("@services/books.service"));
class BooksController {
    constructor() {
        this.bookService = new books_service_1.default();
        this.getBooks = async (req, res, next) => {
            try {
                const findAllBooksData = await this.bookService.findAllBook();
                res.status(200).json({ data: findAllBooksData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getBookById = async (req, res, next) => {
            try {
                const bookId = req.params.id;
                const findOneBookData = await this.bookService.findBookById(bookId);
                res.status(200).json({ data: findOneBookData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createBook = async (req, res, next) => {
            try {
                const bookData = req.body;
                const createBookData = await this.bookService.createBook(bookData);
                res.status(201).json({ data: createBookData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateBook = async (req, res, next) => {
            try {
                const bookId = req.params.id;
                const bookData = req.body;
                const updateBookData = await this.bookService.updateBook(bookId, bookData);
                res.status(200).json({ data: updateBookData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.addBookReview = async (req, res, next) => {
            try {
                const bookId = req.params.id;
                const reviewData = req.body;
                reviewData.user = req.user;
                const updateBookData = await this.bookService.updateBookReview(bookId, reviewData);
                res.status(200).json({ data: updateBookData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteBook = async (req, res, next) => {
            try {
                const bookId = req.params.id;
                const deleteBookData = await this.bookService.deleteBook(bookId);
                res.status(200).json({ data: deleteBookData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = BooksController;
//# sourceMappingURL=books.controller.js.map