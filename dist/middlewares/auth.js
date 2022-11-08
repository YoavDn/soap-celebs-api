"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
function isDev(req, res, next) {
    if (process.env.NODE_ENV === 'development')
        next();
}
exports.auth = {
    isDev,
};
