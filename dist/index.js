"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlcontroller_1 = require("controller/urlcontroller");
const api = (0, express_1.default)();
api.use(express_1.default.json());
const urlcontroller = new urlcontroller_1.URLController();
api.post('/shorten', urlcontroller.shorten);
api.get('/:hash', urlcontroller.redirect);
api.listen(5000, () => console.log('express listen'));
//# sourceMappingURL=index.js.map