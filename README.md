Voter Registration System

Project Overview

This project is a Voter Registration System designed to manage voter registration applications and verified voter data. The system consists of two main components:

Voter Registration Application Queue

Handles the submission and management of voter applications.

Tracks the status of each application (e.g., pending, verified, rejected).

Verified User Queue

Maintains a list of users whose voter applications have been successfully verified.

Stores essential details for voter roll creation.

Features

1. Voter Registration Application Queue

Stores information about voter registration applications.

Includes details such as the applicant's name, date of birth, address, national ID, and application status.

Tracks the timestamp of when the application was submitted.

2. Verified User Queue

Stores verified voter information.

Includes details such as the voter ID, name, date of birth, address, and national ID.

Tracks the timestamp of when the user was verified.

Application Workflow

A voter submits their registration application.

The application is stored in the Voter Registration Application Queue with a status of pending.

Admins review the application and either:

Approve it: the status changes to verified, and the user's data is moved to the Verified User Queue.

Reject it: the status changes to rejected with optional comments.

Verified user data is available for creating voter rolls or other operations.

Technologies Used

Backend: Node.js with Express.js

Database: MongoDB with Mongoose ORM

Password Hashing: bcrypt

Validation: Mongoose Schema validation




//new details 


# Election Management System API

This documentation covers the details of the Election Management System API, including the routes, expected request payloads, and sample responses.

---

## Table of Contents

- [Introduction](#introduction)
- [API Routes](#api-routes)
  - [Admin Routes](#admin-routes)
  - [Voter Routes](#voter-routes)
  - [Party Routes](#party-routes)
  - [Candidate Routes](#candidate-routes)
  - [Data Retrieval Routes](#data-retrieval-routes)
  - [Update Routes](#update-routes)
- [Models](#models)
- [Setup](#setup)
- [Sample Environment Variables](#sample-environment-variables)

---

## Introduction

This API is designed for managing an election system, allowing users to register as voters, parties, or candidates, and enabling admins to review and update statuses. The API supports CRUD operations for parties, candidates, and voters while ensuring secure access for admins.

---

## API Routes

### Admin Routes

#### **1. Admin Registration**
**Endpoint:** `/admin-register`  
**Method:** POST

**Request Payload:**
```json
{
  "username": "adminUser",
  "email": "admin@example.com",
  "role": "admin",
  "password": "securepassword"
}
```

**Sample Response:**
```json
{
  "message": "Admin registered successfully!"
}
```

---

#### **2. Admin Login**
**Endpoint:** `/admin-login`  
**Method:** POST

**Request Payload:**
```json
{
  "username": "adminUser",
  "password": "securepassword"
}
```

**Sample Response:**
```json
{
  "_id": "64f2ed9f7c5d0700216f0a9b",
  "username": "adminUser",
  "email": "admin@example.com",
  "role": "admin",
  "last_login": "2023-09-03T10:15:30.000Z"
}
```

---

### Voter Routes

#### **1. Voter Registration**
**Endpoint:** `/voter-register`  
**Method:** POST

**Request Payload:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "dob": "1990-01-01",
  "address": "123 Main St, Cityville",
  "constituency": "District 1",
  "phone": "9876543210",
  "password": "password123"
}
```

**Sample Response:**
```json
{
  "message": "User registered successfully!"
}
```

---

#### **2. Voter Login**
**Endpoint:** `/voter-login`  
**Method:** POST

**Request Payload:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Sample Response:**
```json
{
  "_id": "64f2ed9f7c5d0700216f0a9b",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "constituency": "District 1",
  "status": "Approved",
  "last_login": "2023-09-03T10:15:30.000Z"
}
```

---

### Party Routes

#### **1. Party Registration**
**Endpoint:** `/party-register`  
**Method:** POST

**Request Payload:**
```json
{
  "name": "Green Party",
  "symbol": "Tree",
  "leader": "Jane Green",
  "establishedYear": 2001,
  "address": "456 Elm St, Green City",
  "status": "Pending"
}
```

**Sample Response:**
```json
{
  "_id": "64f2ed9f7c5d0700216f0a9c",
  "name": "Green Party",
  "symbol": "Tree",
  "leader": "Jane Green",
  "address": "456 Elm St, Green City",
  "status": "Pending"
}
```

---

### Candidate Routes

#### **1. Candidate Registration**
**Endpoint:** `/candidate-register`  
**Method:** POST

**Request Payload:**
```json
{
  "name": "Mark Candidate",
  "party": "Green Party",
  "constituency": "District 1",
  "age": 45,
  "education": "Masters in Political Science",
  "criminalRecords": false,
  "status": "Pending"
}
```

**Sample Response:**
```json
{
  "_id": "64f2ed9f7c5d0700216f0a9d",
  "name": "Mark Candidate",
  "party": "Green Party",
  "constituency": "District 1",
  "status": "Pending"
}
```

---

### Data Retrieval Routes

#### **1. Get Party Data**
**Endpoint:** `/get-party-data`  
**Method:** GET

**Sample Response:**
```json
[
  {
    "_id": "64f2ed9f7c5d0700216f0a9c",
    "name": "Green Party",
    "leader": "Jane Green",
    "symbol": "Tree",
    "status": "Approved"
  }
]
```

---

#### **2. Get Candidate Data**
**Endpoint:** `/get-candidate-data`  
**Method:** GET

**Sample Response:**
```json
[
  {
    "_id": "64f2ed9f7c5d0700216f0a9d",
    "name": "Mark Candidate",
    "party": "Green Party",
    "constituency": "District 1",
    "status": "Approved"
  }
]
```

---

#### **3. Get Voter Data**
**Endpoint:** `/get-voter-data`  
**Method:** GET

**Sample Response:**
```json
[
  {
    "_id": "64f2ed9f7c5d0700216f0a9b",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "constituency": "District 1",
    "status": "Approved"
  }
]
```

---

### Update Routes

#### **1. Update Party Status**
**Endpoint:** `/update-party-status`  
**Method:** PUT

**Request Payload:**
```json
{
  "partyId": "64f2ed9f7c5d0700216f0a9c",
  "status": "Approved"
}
```

**Sample Response:**
```json
{
  "message": "Party status updated to 'Approved' successfully!",
  "updatedParty": {
    "_id": "64f2ed9f7c5d0700216f0a9c",
    "name": "Green Party",
    "status": "Approved"
  }
}
```

---

#### **2. Update Voter Status**
**Endpoint:** `/update-voter-status`  
**Method:** PUT

**Request Payload:**
```json
{
  "voterId": "64f2ed9f7c5d0700216f0a9b",
  "status": "Approved"
}
```

**Sample Response:**
```json
{
  "message": "Voter status updated to 'Approved' successfully!",
  "updatedVoter": {
    "_id": "64f2ed9f7c5d0700216f0a9b",
    "name": "John Doe",
    "status": "Approved"
  }
}
```

---

## Models

### 1. Admin Schema
- `username` (String, unique)
- `email` (String, unique)
- `password` (String)
- `role` (String, enum: ["super_admin", "admin"])

### 2. Voter Application Schema
- `name` (String)
- `email` (String, unique)
- `dob` (Date)
- `address` (String)
- `phone` (String, unique)
- `status` (enum: ["Pending", "Approved", "Rejected"])

### 3. Party Schema
- `name` (String, unique)
- `leader` (String)
- `symbol` (String, unique)
- `status` (enum: ["Pending", "Approved", "Rejected"])

### 4. Candidate Schema
- `name` (String)
- `party` (String)
- `constituency` (String)
- `age` (Number, min: 25)
- `status` (enum: ["Pending", "Approved", "Rejected"])

---

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure `.env` file with the required environment variables.
4. Run `npm start` to start the server.

---

## Sample Environment Variables

```env
PORT=3000
URI=mongodb://localhost:27017/electionDB
```

