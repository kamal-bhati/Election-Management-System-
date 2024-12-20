import {
  adminRegister,
  voterRegistration,
  partyRegistration,
  candidateRegistration,
} from "../Controllers/registration.js";
import { adminLogin,voterLogin } from "../Controllers/login.js";
import { getPartyData,getVoterData,getcandidateData } from "../Controllers/getData.js";
import { updatePartyStatus,updateStatusVoter } from "../Controllers/updateData.js";
import express from "express";
let adminRegisterRoute = express.Router();
let adminLoginRoute = express.Router();
let voterRegistrationRoute = express.Router();
let partyRegistrationRoute = express.Router();
let candidateRegistrationRoute = express.Router();
let homeRoute = express.Router();
let getPartyDataRoute = express.Router();
let getCandidateDataRoute = express.Router();
let getVoterDataRoute = express.Router();
let updatePartyStatusRoute = express.Router();
let voterLoginRoute = express.Router();
let updateVoterStatusRoute = express.Router();

//Registration Route
adminRegisterRoute.post("/admin-register", adminRegister);
voterRegistrationRoute.post("/voter-register", voterRegistration);
partyRegistrationRoute.post("/party-register", partyRegistration);
candidateRegistrationRoute.post("/candidate-register", candidateRegistration);

//Login Route
adminLoginRoute.post("/admin-login", adminLogin);
voterLoginRoute.post("/voter-login",voterLogin)

//Update Route
updatePartyStatusRoute.put("/update-party-status", updatePartyStatus);
updateVoterStatusRoute.put("/update-voter-status",updateStatusVoter);

//Data get Route
getPartyDataRoute.get("/get-party-data", getPartyData);
getCandidateDataRoute.get("/get-candidate-data", getcandidateData);
getVoterDataRoute.get("/get-voter-data", getVoterData);

homeRoute.get("/", (req, res) => {
  res.send(`Welcome to the Election Management System awailable routes are  - 
    /admin-register,
    /voter-register,
    /party-register,
    /candidate-register,
    /admin-login,
    /update-party-status,
    /get-party-data,
    /get-candidate-data,
    /get-voter-data`);
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
  getCandidateDataRoute,
  getVoterDataRoute,
  voterLoginRoute,
  updateVoterStatusRoute
};
