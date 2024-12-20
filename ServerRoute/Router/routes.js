import {
  adminRegister,
  voterRegistration,
  partyRegistration,
  candidateRegistration,
} from "../Controllers/registration.js";
import { adminLogin } from "../Controllers/login.js";
import { getPartyData } from "../Controllers/getData.js";
import { updatePartyStatus } from "../Controllers/updateData.js";
import express from "express";
let adminRegisterRoute = express.Router();
let adminLoginRoute = express.Router();
let voterRegistrationRoute = express.Router();
let partyRegistrationRoute = express.Router();
let candidateRegistrationRoute = express.Router();
let homeRoute = express.Router();
let getPartyDataRoute = express.Router();
let updatePartyStatusRoute = express.Router();

//Registration Route
adminRegisterRoute.post("/admin-register", adminRegister);
voterRegistrationRoute.post("/voter-register", voterRegistration);
partyRegistrationRoute.post("/party-register", partyRegistration);
candidateRegistrationRoute.post("/candidate-register", candidateRegistration);

//Login Route
adminLoginRoute.post("/admin-login", adminLogin);

//Update Route

updatePartyStatusRoute.put("/update-party-status", updatePartyStatus);

//Data get Route
getPartyDataRoute.get("/get-party-data", getPartyData);

homeRoute.get("/", (req, res) => {
  res.send("Welcome to the Election Management System");
});

export {
  adminRegisterRoute,
  adminLoginRoute,
  voterRegistrationRoute,
  partyRegistrationRoute,
  candidateRegistrationRoute,
  homeRoute,
  getPartyDataRoute,
  updatePartyStatusRoute,
};
