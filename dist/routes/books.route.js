"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _booksController = _interopRequireDefault(require("../controllers/books.controller"));
const _booksDto = require("../dtos/books.dto");
const _validationMiddleware = _interopRequireDefault(require("../middlewares/validation.middleware"));
const _authMiddleware = _interopRequireDefault(require("../middlewares/auth.middleware"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let BooksRoute = class BooksRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, _authMiddleware.default, this.booksController.getBooks);
        this.router.get(`${this.path}/:id`, this.booksController.getBookById);
        this.router.post(`${this.path}`, (0, _validationMiddleware.default)(_booksDto.CreateBookDto, 'body'), this.booksController.createBook);
        this.router.put(`${this.path}/:id`, (0, _validationMiddleware.default)(_booksDto.CreateBookDto, 'body', true), this.booksController.updateBook);
        this.router.put(`${this.path}/review/:id`, (0, _validationMiddleware.default)(_booksDto.UpdateBookReviewDto, 'body', true), _authMiddleware.default, this.booksController.addBookReview);
        this.router.delete(`${this.path}/:id`, this.booksController.deleteBook);
    }
    constructor(){
        this.path = '/books';
        this.router = (0, _express.Router)();
        this.booksController = new _booksController.default();
        this.initializeRoutes();
    }
};
const _default = BooksRoute;

//# sourceMappingURL=books.route.js.map