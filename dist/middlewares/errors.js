"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
function notFound(req, res, next) {
    const err = new Error('There is nothing here.');
    err.status = 404;
    next(err);
}
exports.errors = {
    notFound,
};
