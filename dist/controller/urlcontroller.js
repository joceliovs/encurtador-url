"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const express_1 = require("express");
const shortid_1 = __importDefault(require("shortid"));
const constants_1 = require("./config/constants");
class URLController {
    shorten() {
        return __awaiter(this, void 0, void 0, function* () {
            const { originURL } = express_1.request.body;
            const hash = shortid_1.default.generate();
            const shortURL = `${constants_1.config.API_URL}/${hash}`;
            express_1.response.json({ originURL, hash, shortURL });
        });
    }
    redirect() {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = express_1.request.params;
            const url = {
                originURL: "",
                hash: "",
                shortURL: ""
            };
            express_1.response.redirect(url.originURL);
        });
    }
}
exports.URLController = URLController;
//# sourceMappingURL=urlcontroller.js.map