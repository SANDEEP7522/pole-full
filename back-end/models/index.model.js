import mongoose, { model } from "mongoose";

// Your mongoose connection code
mongoose.connect('mongodb://localhost/vote')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB...', err));


// import User from './user.js'; 


// Exporting the mongoose connection object as default or named export
const db = mongoose.connection;
export default db;
