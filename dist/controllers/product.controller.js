"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = __importDefault(require("../libs/Errors"));
const productController = {};
productController.getAllProducts = (req, res) => {
    try {
        console.log("getAllProducts");
        return res.status(200).json({
            success: true,
            message: "All products loaded successfully.",
            products: []
        });
    }
    catch (err) {
        console.log("Error, getAllProducts:", err);
        if (err instanceof Errors_1.default)
            return res.status(err.code).json(err);
        return res.status(Errors_1.default.standard.code).json(Errors_1.default.standard);
    }
};
productController.createNewProduct = async (req, res) => {
    try {
        console.log("createNewProduct");
    }
    catch (err) {
        console.log("Error, createNewProduct:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.standard.code).json(Errors_1.default.standard);
    }
};
productController.updateChosenProduct = async (req, res) => {
    try {
        console.log("updateChosenProduct");
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
