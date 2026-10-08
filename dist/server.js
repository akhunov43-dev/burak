"use strict";
/* console.log("EXECUTED!");

import moment from "moment";

const currentTime = moment().format("YYYY MM DD");
console.log(currentTime);

const person: string = "Martin"
const count: number = 100;
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Architectural pattern MVC, Dependency Injection, MVP
// Design pattern: Middleware, Decotar
/*
console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.PORT);

// CLUSTER => DATABASE => COLLECTION => DOCUMENT */
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
mongoose_1.default
    .connect(process.env.MONGO_URL, {})
    .then((data) => {
    console.log("MongoDB connection succed");
    const PORT = process.env.PORT ?? 3003;
    app_1.default.listen(PORT, function () {
        console.log(`The server is running succesfully on port: ${PORT}`);
        console.log("Admin project is running on http://localhost:3003/admin");
    });
})
    .catch((err) => console.log("ERROR on connection MongoDB", err));
