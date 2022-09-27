"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _typegoose = require("@typegoose/typegoose");
const _booksInterface = require("../interfaces/books.interface");
const _mongoose = require("mongoose");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Review = class Review {
};
__decorate([
    (0, _typegoose.prop)({
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }),
    __metadata("design:type", typeof _mongoose.Schema === "undefined" || typeof _mongoose.Schema.Types === "undefined" || typeof _mongoose.Schema.Types.ObjectId === "undefined" ? Object : _mongoose.Schema.Types.ObjectId)
], Review.prototype, "user", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: Number
    }),
    __metadata("design:type", Number)
], Review.prototype, "likes", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", String)
], Review.prototype, "content", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", String)
], Review.prototype, "imageURL", void 0);
let Book = class Book {
};
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", String)
], Book.prototype, "type", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", Array)
], Book.prototype, "authors", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", String)
], Book.prototype, "publisher", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], Book.prototype, "isVirtual", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", String)
], Book.prototype, "edition", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: Number
    }),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", typeof _booksInterface.Currency === "undefined" ? Object : _booksInterface.Currency)
], Book.prototype, "currency", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: [
            Review
        ]
    }),
    __metadata("design:type", Array)
], Book.prototype, "reviews", void 0);
let BookItem = class BookItem extends Book {
};
__decorate([
    (0, _typegoose.prop)({
        type: Number
    }),
    __metadata("design:type", Number)
], BookItem.prototype, "numberOfCopies", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String
    }),
    __metadata("design:type", String)
], BookItem.prototype, "qrCode", void 0);
BookItem = __decorate([
    (0, _typegoose.modelOptions)({
        schemaOptions: {
            collection: 'books',
            timestamps: true
        }
    })
], BookItem);
const BookModel = (0, _typegoose.getModelForClass)(BookItem);
const _default = BookModel;

//# sourceMappingURL=books.model.js.map