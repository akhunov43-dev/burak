"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../libs/config");
const Errors_1 = __importStar(require("../libs/Errors"));
const product_model_1 = __importDefault(require("../schema/product.model"));
class ProductService {
    constructor() {
        this.productModel = product_model_1.default;
    }
    /** SPA */
    /** SSR */
    async getAllProducts() {
        const result = await this.productModel
            .find().exec();
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_MODIFIED, Errors_1.Message.NO_DATA_FOUND);
        return result;
    }
    async createNewProduct(input) {
        try {
            return await this.productModel.create(input);
        }
        catch (err) {
            console.error("Error, model:createNewProduct:", err);
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_1.Message.CREATE_FAILED);
        }
    }
    async updateChosenProduct(id, input) {
        // string => ObjectId
        id = (0, config_1.shapeIntoMongooseObjectId)(id);
        const result = await this.productModel.findOneAndUpdate({ _id: id }, input, { new: true }).exec();
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_MODIFIED, Errors_1.Message.UPDATE_FAILED);
        return result;
    }
}
exports.default = ProductService;
