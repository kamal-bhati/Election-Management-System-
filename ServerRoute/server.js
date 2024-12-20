import {
  homeRoute,
  adminRegisterRoute,
  adminLoginRoute,
  voterRegistrationRoute,
  partyRegistrationRoute,
  candidateRegistrationRoute,
  getPartyDataRoute,
  updatePartyStatusRoute,
  getCandidateDataRoute,
  getVoterDataRoute,
} from "./Router/routes.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
let app = express();

dotenv.config();
mongoose.connect(process.env.URI);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", adminRegisterRoute);
app.use("/", adminLoginRoute);
app.use("/", voterRegistrationRoute);
app.use("/", partyRegistrationRoute);
app.use("/", candidateRegistrationRoute);
app.use("/", homeRoute);

app.use("/", getPartyDataRoute);
app.use("/",getCandidateDataRoute);
app.use("/",getVoterDataRoute);

//update Route
app.use("/", updatePartyStatusRoute);
app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server connected");
});
