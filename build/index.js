"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const os_1 = require("os"); // Import ES6 style
const answer = JSON.stringify((0, os_1.cpus)());
console.log(chalk_1.default.yellow(answer));
