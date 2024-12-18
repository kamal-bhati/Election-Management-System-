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

