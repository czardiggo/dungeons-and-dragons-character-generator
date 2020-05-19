"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 3333;
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(PORT, function () { return console.log("Server running at http://localhost:" + PORT + "/"); });
