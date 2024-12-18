import {admin,VoterApplication,VerifiedUser}  from '../Models/model.js'
import bcrypt from 'bcryptjs';


let adminRegister =async (req,res)=>{
    console.log("hert1 we are routes")
    let {username,email,role,password} = req.body;

    try {
        let adminData = await admin.findOne({username,email,role});
        if(adminData){
            return res.status(409).json({message: "Admin already exists!"});
        }
        
        let hashedPassword = await bcrypt.hash(password,10);
        let last_login = new Date()
        
        let newAdmin = new admin({username,email,password:hashedPassword,role,last_login});
        await newAdmin.save();
        
        res.status(201).json({message: "Admin registered successfully!"});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error registering admin!"});
        
    }
}

let voterRegistration = async (req, res) => {
    let {name,email,dob,address,phone,password} = req.body;
    try {
        let user = await VerifiedUser.findOne({email});
        if(user){
            return res.status(409).json({message: "User already exists!"});
        }
        
        let hashedPassword = await bcrypt.hash(password,10);
        
        let newUser = new VerifiedUser({name,email,dob,address,phone,password:hashedPassword});
        await newUser.save();
        
        res.status(201).json({message: "User registered successfully!"});

        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error registering user!"});
        
    }
}


export {adminRegister,voterRegistration}

