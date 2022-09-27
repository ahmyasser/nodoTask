"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const books_interface_1 = require("@/interfaces/books.interface");
const mongoose_1 = require("mongoose");
class Review {
}
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }),
    tslib_1.__metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], Review.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "likes", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "content", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "imageURL", void 0);
class Book {
}
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", Array)
], Book.prototype, "authors", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "publisher", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], Book.prototype, "isVirtual", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "edition", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], Book.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "currency", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: [Review] }),
    tslib_1.__metadata("design:type", Array)
], Book.prototype, "reviews", void 0);
let BookItem = class BookItem extends Book {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], BookItem.prototype, "numberOfCopies", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String }),
    tslib_1.__metadata("design:type", String)
], BookItem.prototype, "qrCode", void 0);
BookItem = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: { collection: 'books', timestamps: true } })
], BookItem);
const BookModel = (0, typegoose_1.getModelForClass)(BookItem);
exports.default = BookModel;
//# sourceMappingURL=books.model.js.map