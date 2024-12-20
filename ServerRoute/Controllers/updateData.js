import { partVerification,VoterApplication } from '../Models/model.js';

const updatePartyStatus = async (req, res) => {
  const { partyId, status } = req.body;
  if (!partyId || !["Approved", "Rejected"].includes(status)) {
    return res
      .status(400)
      .json({ message: "Invalid party ID or status value!" });
  }
  try {
    const updatedParty = await partVerification.findByIdAndUpdate(
      partyId,
      { status },
      { new: true }
    );

    if (!updatedParty) {
      return res.status(404).json({ message: "Party not found!" });
    }

    res.status(200).json({
      message: `Party status updated to '${status}' successfully!`,
      updatedParty,
    });
  } catch (error) {
    console.error("Error updating party status:", error);
    res.status(500).json({ message: "Error updating party status!" });
  }
};

let updateStatusVoter = async (req, res) => {
    const { voterId, status } = req.body;
    if (!voterId ||!["Approved", "Rejected"].includes(status)) {
      return res
       .status(400)
       .json({ message: "Invalid voter ID or status value!" });
    }
    try {
      const updatedVoter = await VoterApplication.findByIdAndUpdate(
        voterId,
        { status },
        { new: true }
      );
      
      if (!updatedVoter) {
        return res.status(404).json({ message: "Voter not found!" });
      }
      
      res.status(200).json({
        message: `Voter status updated to '${status}' successfully!`,
        updatedVoter,
      });
      
    } catch (error) {
        console.error("Error updating voter status:", error);
      res.status(500).json({ message: "Error updating voter status!" });
    }
}

export { updatePartyStatus,updateStatusVoter };
