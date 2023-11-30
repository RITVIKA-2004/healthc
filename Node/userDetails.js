const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    age: String,
    gender: String,
    location: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
    allergies: String,
    address: String,
    phone: String,
    presentingComplaint: String,
    historyOfPresentingComplaint: String,
    similarComplaints: String,
    lastSurgery: String,
    typeOfDiet: String,
    appetite: String,
    sleepPatterns: String,
    bowelMovements: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);
