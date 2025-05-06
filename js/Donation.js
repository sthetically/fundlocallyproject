// Donation.js
const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cause: { type: String, required: true },
});

const Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;
