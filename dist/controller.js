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
exports._addCeleb = exports.getCelebList = exports.queryFemaleCelebs = exports.queryMaleCelebs = exports.getRandomCeleb = exports.queryCelebs = void 0;
const service_1 = require("./service");
function queryCelebs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const celebs = yield service_1.soapCelebsService.queryCelebs(req.query);
            return res.send(celebs);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.queryCelebs = queryCelebs;
function getRandomCeleb(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const randomCeleb = yield service_1.soapCelebsService.getRandom(req.query);
            return res.send(randomCeleb);
        }
        catch (err) {
            res.status(400);
            res.json(err);
        }
    });
}
exports.getRandomCeleb = getRandomCeleb;
function queryMaleCelebs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const celebs = yield service_1.soapCelebsService.queryMaleCelebs(req.query);
            return res.send(celebs);
        }
        catch (err) {
            res.status(400);
            res.json(err);
        }
    });
}
exports.queryMaleCelebs = queryMaleCelebs;
function queryFemaleCelebs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const celebs = yield service_1.soapCelebsService.queryFemaleCelebs(req.query);
            return res.send(celebs);
        }
        catch (err) {
            res.status(400);
            res.json(err);
        }
    });
}
exports.queryFemaleCelebs = queryFemaleCelebs;
function getCelebList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const list = yield service_1.soapCelebsService.getCelebList(req.query);
            return res.send(list);
        }
        catch (err) {
            res.status(400);
            res.json(err);
        }
    });
}
exports.getCelebList = getCelebList;
function _addCeleb(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service_1.soapCelebsService.addSoapCeleb(req.body);
            return res.send('added celeb').status(200);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports._addCeleb = _addCeleb;
