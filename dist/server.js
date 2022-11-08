"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
const errors_1 = require("./middleware/errors");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
mongoose_1.default.connect(config_1.default.dbUrl)
    .then(() => console.log('connected to mongo'))
    .catch((err) => console.log('failed to connect', err));
app.use('/api/', routes_1.default);
app.use(errors_1.errors.notFound);
app.listen(port, () => {
    console.log('app listening on port ' + port);
});
