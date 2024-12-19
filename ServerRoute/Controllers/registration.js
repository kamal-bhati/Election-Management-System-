import {admin,VoterApplication,VerifiedUser,candidateVerification,partVerification} from '../Models/model.js'
import bcrypt from 'bcryptjs';

let adminRegister =async (req,res)=>{
    
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
        let user = await VoterApplication.findOne({email});
        if(user){
            return res.status(409).json({message: "User already exists!"});
        }
        
        let hashedPassword = await bcrypt.hash(password,10);
        
        let newUser = new VoterApplication({name,email,dob,address,phone,password:hashedPassword});
        await newUser.save();
        
        res.status(201).json({message: "User registered successfully!"});

        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error registering user!"});
        
    }
}


let partyRegistration = async (req, res) => {
    let {name,symbol,leader,establishedYear,createdAt,address,status,updatedAt} = req.body;
    try {
        let party = await partVerification.findOne({name});
        if(party){
            return res.status(409).json({message: "Party already exists!"});
        }
        
        let newParty = new partVerification({name,symbol,leader,establishedYear,createdAt,address,status,updatedAt});
        await newParty.save();
        
        res.status(201).json(newParty);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error registering party!"});
        
    }
}

let candidateRegistration = async (req, res) => {
    let {name,party,constituency,age,education,criminalRecords,status,createdAt,updatedAt} = req.body;
    try {
        let candidate = await candidateVerification.findOne({name,party,constituency});
        if(candidate){
            return res.status(409).json({message: "Candidate already exists!"});
        }
        
        let newCandidate = new candidateVerification({name,party,constituency,age,education,criminalRecords,status,createdAt,updatedAt});
        await newCandidate.save();
        
        res.status(201).json(newCandidate);
        
    } catch (error) {
        console.error(error);
        res.status(500).json(newCandidate,{message: "Error registering candidate!"});
        
    }
}



export {adminRegister,voterRegistration,partyRegistration,candidateRegistration}

