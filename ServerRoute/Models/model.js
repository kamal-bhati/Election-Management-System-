import mongoose from 'mongoose';


const adminSchema = new mongoose.Schema({
 
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['super_admin', 'admin'],
  },
  last_login: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true, 
});



const voterApplicationSchema = new mongoose.Schema({
  application_id: {
    type: String,
    required: true,
    unique: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  constituency : {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  national_id: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'verified'],
    default: 'pending',
  },
  voted:{
    type: Boolean,
    required: true,
    default: false,
  },
  applied_at: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});


const verifiedUserSchema = new mongoose.Schema({
    voter_id: {
      type: String,
      required: true,
      unique: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    national_id: {
      type: String,
      required: true,
      unique: true,
    },
    verified_at: {
      type: Date,
      default: Date.now,
    },
  }, {
    timestamps: true,
  });
  


  const candidateSchema = new mongoose.Schema({
      name: {
          type: String,
          required: true,
          trim: true,
      },
      party: {
          type:String,
          required: false,
      },
      constituency: {
          type: String,
          required: true,
          trim: true,
      },
      age: {
          type: Number,
          required: true,
          min: 25, 
      },
      education: {
          type: String,
          required: false,
          trim: true,
      },
      criminalRecords: {
          type: Boolean,
          default: false,
      },
      status: {
          type: String,
          enum: ['Pending', 'Approved', 'Rejected'], 
          default: 'Pending',
      },
      createdAt: {
          type: Date,
          default: Date.now,
      },
      updatedAt: {
          type: Date,
          default: Date.now,
      },
  });


  const partySchema = new mongoose.Schema({
      name: {
          type: String,
          required: true,
          unique: true, 
          trim: true,
      },
      leader: {
          type: String,
          required: true,
          trim: true,
      },
      symbol: {
          type: String,
          required: true,
          unique: true, 
      },
      establishedYear: {
          type: Number,
          required: true,
          min: 1800,
          max: new Date().getFullYear(),
      },
      
      address: {
          type: String,
          required: true,
          trim: true,
      },
      status: {
          type: String,
          enum: ['Pending', 'Approved', 'Rejected'], 
          default: 'Pending',
      },
      createdAt: {
          type: Date,
          default: Date.now,
      },
      updatedAt: {
          type: Date,
          default: Date.now,
      },
  });
  
  let partVerification = mongoose.model('Party', partySchema);
  

  let candidateVerification = mongoose.model('Candidate', candidateSchema);
  

  const VerifiedUser = mongoose.model('VerifiedUser', verifiedUserSchema);


const VoterApplication = mongoose.model('VoterApplication', voterApplicationSchema);


let admin = mongoose.model('Admin', adminSchema);


export {admin,VoterApplication,VerifiedUser,candidateVerification,partVerification}
