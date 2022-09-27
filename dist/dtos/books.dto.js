"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookReviewDto = exports.CreateBookDto = void 0;
const tslib_1 = require("tslib");
const books_interface_1 = require("../interfaces/books.interface");
const class_validator_1 = require("class-validator");
class CreateBookDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateBookDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Array)
], CreateBookDto.prototype, "authors", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateBookDto.prototype, "publisher", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateBookDto.prototype, "numberOfCopies", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateBookDto.prototype, "isVirtual", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateBookDto.prototype, "edition", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateBookDto.prototype, "price", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(books_interface_1.Currency),
    tslib_1.__metadata("design:type", String)
], CreateBookDto.prototype, "currency", void 0);
exports.CreateBookDto = CreateBookDto;
class UpdateBookReviewDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateBookReviewDto.prototype, "user", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], UpdateBookReviewDto.prototype, "likes", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateBookReviewDto.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateBookReviewDto.prototype, "imageURL", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(books_interface_1.Rating),
    tslib_1.__metadata("design:type", Number)
], UpdateBookReviewDto.prototype, "rating", void 0);
exports.UpdateBookReviewDto = UpdateBookReviewDto;
//# sourceMappingURL=books.dto.js.map