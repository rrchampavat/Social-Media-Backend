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
const Joi = __importStar(require("@hapi/joi"));
const middlewares_1 = require("../middlewares");
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const router = (0, express_1.Router)();
const userRegisterBodySchema = Joi.object().keys({
    userName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});
const userLoginBodySchema = Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string().required()
});
router.post("/register", (0, middlewares_1.validator)(userRegisterBodySchema), new AuthController_1.default().register);
router.post("/login", (0, middlewares_1.validator)(userLoginBodySchema), new AuthController_1.default().login);
router.get("/logout", middlewares_1.isAuthenticated, new AuthController_1.default().logout);
exports.default = router;
//# sourceMappingURL=AuthRoutes.js.map