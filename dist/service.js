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
Object.defineProperty(exports, "__esModule", { value: true });
exports.soapCelebsService = void 0;
const celeb_model_1 = require("./models/celeb.model");
function queryCelebs(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, limit } = query;
            if (name) {
                return limit
                    ? yield celeb_model_1.SoapCeleb.find({ name: { $regex: name === null || name === void 0 ? void 0 : name.replace('-', ' '), $options: 'i' } }).limit(Number(limit))
                    : yield celeb_model_1.SoapCeleb.find({ name: { $regex: name === null || name === void 0 ? void 0 : name.replace('-', ' '), $options: 'i' } });
            }
            else {
                return limit
                    ? yield celeb_model_1.SoapCeleb.find().limit(Number(limit))
                    : yield celeb_model_1.SoapCeleb.find();
            }
        }
        catch (err) {
            return console.log(err);
        }
    });
}
function queryMaleCelebs(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { limit } = query;
            const res = limit
                ? yield celeb_model_1.SoapCeleb.find({ gender: 'male' }).limit(Number(limit))
                : yield celeb_model_1.SoapCeleb.find({ gender: 'male' });
            return res;
        }
        catch (err) {
            return console.log(err);
        }
    });
}
function queryFemaleCelebs(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { limit } = query;
            const res = limit
                ? yield celeb_model_1.SoapCeleb.find({ gender: 'female' }).limit(Number(limit))
                : yield celeb_model_1.SoapCeleb.find({ gender: 'female' });
            return res;
        }
        catch (err) {
            return console.log(err);
        }
    });
}
function getRandom(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return query.gender
                ? yield celeb_model_1.SoapCeleb.aggregate([
                    { $match: { gender: query.gender } },
                    { $sample: { size: Number(query.limit) || 1 } }
                ])
                : yield celeb_model_1.SoapCeleb.aggregate([{ $sample: { size: Number(query.limit) || 1 } }]);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
function getCelebList(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!query.gender) {
                const list = yield celeb_model_1.SoapCeleb.find();
                return list.map(({ name }) => name);
            }
            const listByGender = yield celeb_model_1.SoapCeleb.find({ gender: query.gender });
            return listByGender.map(({ name }) => name);
        }
        catch (err) {
            return err;
        }
    });
}
function addSoapCeleb(celebBody) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newSoapCeleb = new celeb_model_1.SoapCeleb({
                name: celebBody.name,
                gender: celebBody.gender,
                scent: celebBody.scent,
                imgUrl: celebBody.imgUrl,
            });
            return newSoapCeleb.save()
                .then(() => newSoapCeleb)
                .catch((err) => err);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.soapCelebsService = {
    getRandom,
    addSoapCeleb,
    queryCelebs,
    queryMaleCelebs,
    queryFemaleCelebs,
    getCelebList
};
