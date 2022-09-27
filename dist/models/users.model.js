"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
let User = class User {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: mongoose_1.Schema.Types.ObjectId, ref: 'books' }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "cart", void 0);
User = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: { collection: 'users', timestamps: true } })
], User);
const UserModel = (0, typegoose_1.getModelForClass)(User);
exports.default = UserModel;
//# sourceMappingURL=users.model.js.map