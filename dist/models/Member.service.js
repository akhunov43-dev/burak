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
const Member_model_1 = __importDefault(require("../schema/Member.model"));
const Errors_1 = __importStar(require("../libs/Errors"));
const member_enum_1 = require("../libs/enums/member.enum");
const bcrypt = __importStar(require("bcryptjs"));
const config_1 = require("../libs/config");
class MemberService {
    constructor() {
        this.memberModel = Member_model_1.default;
    }
    /** SPA */
    async signup(input) {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toJSON();
        }
        catch (err) {
            console.log("Error, model:signup:", err);
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_1.Message.USED_NICK_PHONE);
        }
    }
    async login(input) {
        // TODO: consider member status later
        const member = await this.memberModel
            .findOne({ memberNick: input.memberNick }, { memberNick: 1, memberPassword: 1 })
            .exec();
        if (!member)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_MEMBER_NICK);
        const isMatch = await bcrypt.compare(input.memberPassword, member.memberPassword);
        //const isMatch = input.memberPassword === member.memberPassword;
        if (!isMatch) {
            throw new Errors_1.default(Errors_1.HttpCode.UNAUTHORIZED, Errors_1.Message.WRONG_PASSWORD);
        }
        return await this.memberModel.findById(member._id).lean().exec();
    }
    /** SSR */
    async processSignup(input) {
        const exist = await this.memberModel
            .findOne({ memberType: member_enum_1.MemberType.RESTAURANT })
            .exec();
        if (exist)
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_1.Message.CREATE_FAILED);
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
        }
        catch (err) {
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_1.Message.CREATE_FAILED);
        }
    }
    async processLogin(input) {
        const member = await this.memberModel
            .findOne({ memberNick: input.memberNick }, { memberNick: 1, memberPassword: 1 })
            .exec();
        if (!member)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_MEMBER_NICK);
        const isMatch = await bcrypt.compare(input.memberPassword, member.memberPassword);
        //const isMatch = input.memberPassword === member.memberPassword;
        if (!isMatch) {
            throw new Errors_1.default(Errors_1.HttpCode.UNAUTHORIZED, Errors_1.Message.WRONG_PASSWORD);
        }
        return await this.memberModel.findById(member._id).exec();
    }
    ;
    async getUsers() {
        const result = await this.memberModel
            .find({ MemberType: member_enum_1.MemberType.USER })
            .lean()
            .exec();
        if (!result.length)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_DATA_FOUND);
        return result;
    }
    async updateChosenUser(input) {
        input._id = (0, config_1.shapeIntoMongooseObjectId)(input._id);
        const result = await this.memberModel
            .findByIdAndUpdate({ _id: input._id }, input, { new: true })
            .exec();
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_MODIFIED, Errors_1.Message.UPDATE_FAILED);
        return result;
    }
}
exports.default = MemberService;
