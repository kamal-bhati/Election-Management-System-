import { partVerification } from '../Models/model.js';

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

export { getPartyData };
