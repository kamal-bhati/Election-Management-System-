import {admin,VoterApplication} from "../Models/model.js"

import bcrypt from 'bcryptjs';

let adminLogin = async (req, res) => {
   
    let {username, password} = req.body;
    try {
        let adminData = await admin.findOne({username});
        if (!adminData) {
            return res.status(404).json({message: "Admin not found!"});
        }
        
        let isMatch = await bcrypt.compare(password, adminData.password);
        if (!isMatch) {
            return res.status(401).json({message: "Invalid password!"});
        }
        
        adminData.last_login = new Date();
        await adminData.save();
        
        res.json(adminData);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error logging in admin!"});
        
    }
}
let voterLogin = async (req,res) => {
    let {email, password} = req.body;
    try {
        let voterData = await VoterApplication.findOne({email});
        if (!voterData || voterData.status!=="Approved") {
            return res.status(404).json({message: "Voter not registered or not approved by admin!"});
        }
        
        let isMatch = await bcrypt.compare(password, voterData.password);
        if (!isMatch) {
            return res.status(401).json({message: "Invalid password!"});
        }
        
        voterData.last_login = new Date();
        await voterData.save();
        
        res.status(200).json(voterData);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error logging in voter!"});
        
    }
}

export {adminLogin,voterLogin}