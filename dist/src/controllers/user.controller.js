"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const login = (req, res) => {
    res.send("Login");
};
exports.login = login;
const register = (req, res) => {
    res.send("Register");
};
exports.register = register;
