"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("@exceptions/HttpException");
const books_model_1 = tslib_1.__importDefault(require("@models/books.model"));
const util_1 = require("@utils/util");
class BookService {
    constructor() {
        this.books = books_model_1.default;
    }
    async findAllBook() {
        const books = await books_model_1.default.find();
        return books;
    }
    async findBookById(bookId) {
        if ((0, util_1.isEmpty)(bookId))
            throw new HttpException_1.HttpException(400, 'BookId is empty');
        const findBook = await books_model_1.default.findOne({ _id: bookId });
        if (!findBook)
            throw new HttpException_1.HttpException(409, "Book doesn't exist");
        return findBook;
    }
    async createBook(bookData) {
        if ((0, util_1.isEmpty)(bookData))
            throw new HttpException_1.HttpException(400, 'bookData is empty');
        const createBookData = await books_model_1.default.create(bookData);
        return createBookData;
    }
    async updateBook(bookId, bookData) {
        if ((0, util_1.isEmpty)(bookData))
            throw new HttpException_1.HttpException(400, 'bookData is empty');
        const updateBookById = await books_model_1.default.findByIdAndUpdate(bookId, { bookData });
        if (!updateBookById)
            throw new HttpException_1.HttpException(409, "Book doesn't exist");
        return updateBookById;
    }
    async updateBookReview(bookId, reviewData) {
        if ((0, util_1.isEmpty)(reviewData))
            throw new HttpException_1.HttpException(400, 'bookData is empty');
        console.log(reviewData);
        const updateBookById = await (await books_model_1.default.findByIdAndUpdate(bookId, { $push: { reviews: reviewData } })).populate('reviews.user');
        if (!updateBookById)
            throw new HttpException_1.HttpException(409, "Book doesn't exist");
        return updateBookById;
    }
    async deleteBook(bookId) {
        const deleteBookById = await books_model_1.default.findByIdAndDelete(bookId);
        if (!deleteBookById)
            throw new HttpException_1.HttpException(409, "Book doesn't exist");
        return deleteBookById;
    }
}
exports.default = BookService;
//# sourceMappingURL=books.service.js.map