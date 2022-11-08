"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./middleware/auth");
const controller_1 = require("./controller");
const router = express_1.default.Router();
//base url 
router.get('/', (req, res) => {
    return res.json({
        "celebs": "https://soapcelebsapi.onrender.com/api/celeb",
        "randomCeleb": "https://soapcelebsapi.onrender.com/api/celeb/random",
        "maleCeleb": "https://soapcelebsapi.onrender.com/api/celeb/male",
        "femaleCeleb": "https://soapcelebsapi.onrender.com/api/celeb/female",
        "celebsList": "https://soapcelebsapi.onrender.com/api/celeb/list"
    });
});
//celebs req
router.get('/celeb', controller_1.queryCelebs);
router.get('/celeb/random', controller_1.getRandomCeleb);
router.get('/celeb/male', controller_1.queryMaleCelebs);
router.get('/celeb/female', controller_1.queryFemaleCelebs);
router.get('/celeb/list', controller_1.getCelebList);
// adding celeb (only in development)
router.post('/add', auth_1.auth.isDev, controller_1._addCeleb);
exports.default = router;
