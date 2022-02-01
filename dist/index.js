"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
require("dotenv/config");
const db_1 = __importDefault(require("./src/db"));
const PORT = process.env.PORT || 3002;
db_1.default.sync({ force: true }).then(() => {
    server_1.default.listen(PORT, () => {
        console.log(`"%s listening at ${PORT}`);
    });
});
