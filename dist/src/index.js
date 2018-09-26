"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
/* color dev console tools */
exports.log = (t) => { console.log(chalk_1.default.magenta(t)); };
exports.info = (t) => { console.info(chalk_1.default.cyan(t)); };
exports.warn = (t) => { console.warn(chalk_1.default.yellow(t)); };
exports.error = (t) => { console.error(chalk_1.default.red(t)); };
exports.success = (t) => { console.info(chalk_1.default.green(t)); };
exports.dev = (t) => { console.log(chalk_1.default.bgCyan(t)); };
exports.bp = (t) => { console.warn(chalk_1.default.bgMagenta(t)); };
//# sourceMappingURL=index.js.map