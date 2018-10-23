"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
/* color dev console tools */
exports.log = (t) => { console.log(chalk_1.default.magenta(t)); };
exports.info = (t) => { console.info(chalk_1.default.cyan(t)); };
exports.warn = (t) => { console.warn(chalk_1.default.yellow(t)); };
exports.error = (t) => { console.error(chalk_1.default.red(t)); };
exports.success = (t) => { console.info(chalk_1.default.green(t)); };
exports.dev = (t) => {
    if (process.env.NODE_ENV == 'development')
        console.log(chalk_1.default.bgCyan(t));
};
exports.bp = (t) => { console.warn(chalk_1.default.bgMagenta(t)); };
exports.delay = (time) => __awaiter(this, void 0, void 0, function* () {
    yield new Promise((resolve) => setTimeout(resolve, time));
});
//# sourceMappingURL=index.js.map