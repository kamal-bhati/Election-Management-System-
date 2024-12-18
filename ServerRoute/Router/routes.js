import { adminRegister,voterRegistration } from "../Controllers/registration.js";
import { adminLogin } from "../Controllers/login.js";
import express from "express";
let adminRegisterRoute = express.Router();
let adminLoginRoute = express.Router();
let voterRegistrationRoute = express.Router();

//router routes
adminRegisterRoute.post("/admin-register",adminRegister)
adminLoginRoute.post("/admin-login",adminLogin);
voterRegistrationRoute.post("/voter-register",voterRegistration);

export {adminRegisterRoute,adminLoginRoute,voterRegistrationRoute}
