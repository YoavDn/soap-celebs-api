"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoapCeleb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const celebSchema = new Schema({
    name: String,
    imgUrl: String,
    scent: String,
    gender: String
});
exports.SoapCeleb = model('SoapCeleb', celebSchema);
