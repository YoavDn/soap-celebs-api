"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const localUrl = 'mongodb://localhost:27017/soap_celebs';
const dbUrl = process.env.NODE_ENV === 'production'
    ? process.env.DATABASE
    : localUrl;
const port = Number(process.env.PORT);
const config = {
    dbUrl,
    port,
};
exports.default = config;
