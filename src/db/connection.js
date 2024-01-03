const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is on rock ....");
  } catch (err) {
    console.log("Error while connecting to MONGODB", err);
  }
};

module.exports = connectDB;
