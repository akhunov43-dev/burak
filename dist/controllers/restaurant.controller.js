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
const Member_service_1 = __importDefault(require("../models/Member.service"));
const member_enum_1 = require("../libs/enums/member.enum");
const Errors_1 = __importStar(require("../libs/Errors"));
const memberService = new Member_service_1.default();
const restaurantController = {};
restaurantController.goHome = (req, res) => {
    try {
        console.log("goHome");
        res.render("home");
        // send  / json / redirect / end / render
    }
    catch (err) {
        console.log("Error, goHome:", err);
        res.redirect("/admin/");
    }
};
restaurantController.getSignup = (req, res) => {
    try {
        console.log("getSignup");
        res.render("signup");
    }
    catch (err) {
        console.log("Error, getSignup", err);
        res.redirect("/admin/");
    }
};
restaurantController.getLogin = (req, res) => {
    try {
        console.log("getLogin");
        res.render("login");
    }
    catch (err) {
        console.log("Error, getLogin:", err);
        res.redirect("/admin/");
    }
};
restaurantController.processSignup = async (req, res) => {
    try {
        console.log("processSignup");
        const newMember = req.body;
        newMember.memberType = member_enum_1.MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });
        res.send(result);
    }
    catch (err) {
        console.log("Error, getSignup:", err);
        const message = err instanceof Errors_1.default ? err.message : Errors_1.Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert('${message}'): window,location.replace('/admin/signup')</script>`);
    }
};
restaurantController.processLogin = async (req, res) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input = req.body;
        const memberService = new Member_service_1.default();
        const result = await memberService.processLogin(input);
        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });
    }
    catch (err) {
        console.log("Error, processLogin:", err);
        const message = err instanceof Errors_1.default ? err.message : Errors_1.Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert('${message}'): window,location.replace('/admin/login')</script>`);
    }
};
restaurantController.logout = async (req, res) => {
    try {
        console.log("logout");
        req.session.destroy(function () {
            res.redirect("/admin/");
        });
    }
    catch (err) {
        console.log("Error, logout:", err);
        res.redirect("/admin/");
    }
};
restaurantController.checkAuthSession = async (req, res) => {
    try {
        console.log("checkAuthSession");
        if (req.session.member)
            res.send(`<script>alert('${req.session.member.memberNick}')</script> `);
        else
            res.send(`<script>alert('${Errors_1.Message.NOT_AUTHENTICATED}')</script>`);
    }
    catch (err) {
        console.log("Error, checkAuthSession:", err);
        res.send(err);
    }
};
restaurantController.verifyRestaurant = (req, res, next) => {
    if (req.session?.member?.memberType === member_enum_1.MemberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    }
    else {
        const message = Errors_1.Message.NOT_AUTHENTICATED;
        res.send(`<script>alert('${message}'): window,location.replace('/admin/login')</script>`);
    }
};
exports.default = restaurantController;
