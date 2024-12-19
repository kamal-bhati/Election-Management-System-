import  {adminRegister,voterRegistration,partyRegistration,candidateRegistration} from "../Controllers/registration.js";
import { adminLogin } from "../Controllers/login.js";
import express from "express";
let adminRegisterRoute = express.Router();
let adminLoginRoute = express.Router();
let voterRegistrationRoute = express.Router();
let partyRegistrationRoute = express.Router();
let candidateRegistrationRoute = express.Router();
let homeRoute = express.Router();

//router routes
adminRegisterRoute.post("/admin-register",adminRegister)
adminLoginRoute.post("/admin-login",adminLogin);
voterRegistrationRoute.post("/voter-register",voterRegistration);
partyRegistrationRoute.post("/party-register",partyRegistration);
candidateRegistrationRoute.post("/candidate-register",candidateRegistration);

homeRoute.get("/",(req,res)=>{
    res.send("Welcome to the Election Management System")
})

export {adminRegisterRoute,adminLoginRoute,voterRegistrationRoute,partyRegistrationRoute,candidateRegistrationRoute,homeRoute}
