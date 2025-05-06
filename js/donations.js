// donations.js
const express = require("express");

const Donation = require("./Donation");
const User = require("./User");

const router = express.Router();

// Create a new donation
router.post("/donate", async (req, res) => {
  const { userId, amount, cause } = req.body;

  try {
    const newDonation = new Donation({ user: userId, amount, cause });
    await newDonation.save();

    // Update user's donation history
    const user = await User.findById(userId);
    user.donationHistory.push(newDonation._id);
    await user.save();

    res.status(201).json({ donation: newDonation });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
