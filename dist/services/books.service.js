"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _booksModel = _interopRequireDefault(require("../models/books.model"));
const _util = require("../utils/util");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let BookService = class BookService {
    async findAllBook() {
        const books = await _booksModel.default.find();
        return books;
    }
    async findBookById(bookId) {
        if ((0, _util.isEmpty)(bookId)) throw new _httpException.HttpException(400, 'BookId is empty');
        const findBook = await _booksModel.default.findOne({
            _id: bookId
        });
        if (!findBook) throw new _httpException.HttpException(409, "Book doesn't exist");
        return findBook;
    }
    async createBook(bookData) {
        if ((0, _util.isEmpty)(bookData)) throw new _httpException.HttpException(400, 'bookData is empty');
        const createBookData = await _booksModel.default.create(bookData);
        return createBookData;
    }
    async updateBook(bookId, bookData) {
        if ((0, _util.isEmpty)(bookData)) throw new _httpException.HttpException(400, 'bookData is empty');
        const updateBookById = await _booksModel.default.findByIdAndUpdate(bookId, {
            bookData
        });
        if (!updateBookById) throw new _httpException.HttpException(409, "Book doesn't exist");
        return updateBookById;
    }
    async updateBookReview(bookId, reviewData) {
        if ((0, _util.isEmpty)(reviewData)) throw new _httpException.HttpException(400, 'bookData is empty');
        console.log(reviewData);
        const updateBookById = await (await _booksModel.default.findByIdAndUpdate(bookId, {
            $push: {
                reviews: reviewData
            }
        })).populate('reviews.user');
        if (!updateBookById) throw new _httpException.HttpException(409, "Book doesn't exist");
        return updateBookById;
    }
    async deleteBook(bookId) {
        const deleteBookById = await _booksModel.default.findByIdAndDelete(bookId);
        if (!deleteBookById) throw new _httpException.HttpException(409, "Book doesn't exist");
        return deleteBookById;
    }
    constructor(){
        this.books = _booksModel.default;
    }
};
const _default = BookService;

//# sourceMappingURL=books.service.js.map