import {admin,VoterApplication,VerifiedUser,candidateVerification,partVerification} from '../Models/model.js'
let getPartyData = async (req, res) => {
    try {
       
        let parties = await partVerification.find();

       
        if (!parties || parties.length === 0) {
            return res.status(404).json({ message: "No parties found!" });
        }

     
        res.status(200).json(parties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving party data!" });
    }
};

let  getcandidateData = async (req, res) => {
    try {
        let candidates = await candidateVerification.find();
        if (!candidates || candidates.length === 0) {
            return res.status(404).json({ message: "No candidates found!" });
        }
        res.status(200).json(candidates);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving candidate data!" });
    }
}

let getVoterData = async (req, res) => {
    try {
        let voters = await VoterApplication.find();
        if (!voters || voters.length === 0) {
            return res.status(404).json({ message: "No voters found!" });
        }
        res.status(200).json(voters);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving voter data!" });
    }
}

export { getPartyData,getVoterData,getcandidateData };
