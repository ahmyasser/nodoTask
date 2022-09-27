"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const _config_1 = require("../config");
exports.dbConnection = `mongodb://${_config_1.DB_HOST}:${_config_1.DB_PORT}/${_config_1.DB_DATABASE}`;
//# sourceMappingURL=index.js.map