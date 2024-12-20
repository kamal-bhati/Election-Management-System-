import {homeRoute,adminRegisterRoute,adminLoginRoute,voterRegistrationRoute,partyRegistrationRoute,candidateRegistrationRoute,getPartyDataRoute} from "./Router/routes.js"
import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
let app = express();

dotenv.config();
mongoose.connect(process.env.URI)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",adminRegisterRoute)
app.use("/",adminLoginRoute);
app.use("/",voterRegistrationRoute);
app.use("/",partyRegistrationRoute);
app.use("/",candidateRegistrationRoute);
app.use("/",homeRoute)

app.use("/",getPartyDataRoute)
app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("Server connected")
})

