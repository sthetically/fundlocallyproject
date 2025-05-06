// User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  donationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donation" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
