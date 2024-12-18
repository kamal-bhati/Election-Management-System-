import {admin} from "../Models/model.js"

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
        
        res.json({message: "Admin logged in successfully!", adminData});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error logging in admin!"});
        
    }
}

export {adminLogin}