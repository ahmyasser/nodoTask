"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _booksService = _interopRequireDefault(require("../services/books.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let BooksController = class BooksController {
    constructor(){
        this.bookService = new _booksService.default();
        this.getBooks = async (req, res, next)=>{
            try {
                const findAllBooksData = await this.bookService.findAllBook();
                res.status(200).json({
                    data: findAllBooksData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getBookById = async (req, res, next)=>{
            try {
                const bookId = req.params.id;
                const findOneBookData = await this.bookService.findBookById(bookId);
                res.status(200).json({
                    data: findOneBookData,
                    message: 'findOne'
                });
            } catch (error) {
                next(error);
            }
        };
        this.createBook = async (req, res, next)=>{
            try {
                const bookData = req.body;
                const createBookData = await this.bookService.createBook(bookData);
                res.status(201).json({
                    data: createBookData,
                    message: 'created'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updateBook = async (req, res, next)=>{
            try {
                const bookId = req.params.id;
                const bookData = req.body;
                const updateBookData = await this.bookService.updateBook(bookId, bookData);
                res.status(200).json({
                    data: updateBookData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        };
        this.addBookReview = async (req, res, next)=>{
            try {
                const bookId = req.params.id;
                const reviewData = req.body;
                reviewData.user = req.user;
                const updateBookData = await this.bookService.updateBookReview(bookId, reviewData);
                res.status(200).json({
                    data: updateBookData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        };
        this.deleteBook = async (req, res, next)=>{
            try {
                const bookId = req.params.id;
                const deleteBookData = await this.bookService.deleteBook(bookId);
                res.status(200).json({
                    data: deleteBookData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = BooksController;

//# sourceMappingURL=books.controller.js.map