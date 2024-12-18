import {adminRegisterRoute,adminLoginRoute,voterRegistrationRoute} from "./Router/routes.js"
import express from "express";
import mongoose from "mongoose"
let app = express();
mongoose.connect("mongodb://localhost:27017/AdminData")

app.use(express.json());
app.use("/",adminRegisterRoute)
app.use("/",adminLoginRoute);
app.use("/",voterRegistrationRoute);

app.listen(3000,(req,res)=>{
    console.log("Server connected")
})

