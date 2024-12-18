import mongoose from 'mongoose';
console.log("herte we are routes")
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

const mongoose = require('mongoose');

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
  
  const VerifiedUser = mongoose.model('VerifiedUser', verifiedUserSchema);


const VoterApplication = mongoose.model('VoterApplication', voterApplicationSchema);


let admin = mongoose.model('Admin', adminSchema);


export {admin,VoterApplication,VerifiedUser}
