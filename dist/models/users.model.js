"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _typegoose = require("@typegoose/typegoose");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let User = class User {
};
__decorate([
    (0, _typegoose.prop)({
        type: String,
        required: true,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, _typegoose.prop)({
        type: String,
        required: true
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    (0, _typegoose.modelOptions)({
        schemaOptions: {
            collection: 'users',
            timestamps: true
        }
    })
], User);
const UserModel = (0, _typegoose.getModelForClass)(User);
const _default = UserModel;

//# sourceMappingURL=users.model.js.map