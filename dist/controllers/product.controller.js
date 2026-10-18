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
const Errors_1 = __importStar(require("../libs/Errors"));
const Product_service_1 = __importDefault(require("../models/Product.service"));
const productService = new Product_service_1.default();
const productController = {};
/** SPA */
/** SSR */
productController.getAllProducts = async (req, res) => {
    try {
        console.log("getAllProducts");
        const data = await productService.getAllProducts();
        console.log("products:", data);
        res.render("products", { products: data });
    }
    catch (err) {
        console.log("Error, getAllProducts:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.standard.code).json(Errors_1.default.standard);
    }
};
productController.createNewProduct = async (req, res) => {
    try {
        console.log("createNewProduct");
        console.log("req.files:", req.files);
        if (!req.files?.length)
            throw new Errors_1.default(Errors_1.HttpCode.INTERNAL_SERVER_ERROR, Errors_1.Message.CREATE_FAILED);
        const data = req.body;
        data.productImages = req.files?.map((ele) => {
            return ele.path;
        });
        await productService.createNewProduct(data);
        res.send(`<script>alert("Succesful creation"): window,location.replace('/admin/product/all')</script>`);
    }
    catch (err) {
        console.log("Error, createNewProduct:", err);
        const message = err instanceof Errors_1.default ? err.message : Errors_1.Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert("${message}"): window,location.replace('/admin/product/all')</script>`);
    }
};
productController.updateChosenProduct = async (req, res) => {
    try {
        console.log("updateChosenProduct");
        const id = req.params.id;
        const result = await productService.updateChosenProduct(id, req.body);
        res.status(Errors_1.HttpCode.OK).json({ data: result });
    }
    catch (err) {
        console.log("Error, updateChosenProduct:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.standard.code).json(Errors_1.default.standard);
    }
};
exports.default = productController;
