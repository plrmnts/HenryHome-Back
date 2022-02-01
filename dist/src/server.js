"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
// import 'dotenv/config' Si quieren usar varibles de entorno
// console.log(process.env.PRUEBA);
const server = (0, express_1.default)();
// Configurations
server.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(express_1.default.json({ limit: '50mb' }));
server.use((0, cookie_parser_1.default)());
server.use((0, morgan_1.default)('dev'));
server.use((0, cors_1.default)());
/* server.get("/", (req,res)=>{
    res.send('Holis')
}) */
// Initial route
server.use("/api", routes_1.default);
exports.default = server;
