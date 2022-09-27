"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CreateBookDto: ()=>CreateBookDto,
    UpdateBookReviewDto: ()=>UpdateBookReviewDto
});
const _booksInterface = require("../interfaces/books.interface");
const _classValidator = require("class-validator");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let CreateBookDto = class CreateBookDto {
};
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "type", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", Array)
], CreateBookDto.prototype, "authors", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "publisher", void 0);
__decorate([
    (0, _classValidator.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "numberOfCopies", void 0);
__decorate([
    (0, _classValidator.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBookDto.prototype, "isVirtual", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "edition", void 0);
__decorate([
    (0, _classValidator.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "price", void 0);
__decorate([
    (0, _classValidator.IsEnum)(_booksInterface.Currency),
    __metadata("design:type", typeof _booksInterface.Currency === "undefined" ? Object : _booksInterface.Currency)
], CreateBookDto.prototype, "currency", void 0);
let UpdateBookReviewDto = class UpdateBookReviewDto {
};
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], UpdateBookReviewDto.prototype, "user", void 0);
__decorate([
    (0, _classValidator.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookReviewDto.prototype, "likes", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], UpdateBookReviewDto.prototype, "content", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], UpdateBookReviewDto.prototype, "imageURL", void 0);
__decorate([
    (0, _classValidator.IsEnum)(_booksInterface.Rating),
    __metadata("design:type", typeof _booksInterface.Rating === "undefined" ? Object : _booksInterface.Rating)
], UpdateBookReviewDto.prototype, "rating", void 0);

//# sourceMappingURL=books.dto.js.map