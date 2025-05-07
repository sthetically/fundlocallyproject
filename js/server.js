// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to FundLocally Backend");
});

// Import routes
const authRoutes = require("./auth");
const donationRoutes = require("./donations");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Example route for handling form submission
app.post('/submit-registration', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Registration details:', { name, email, password });
  // Add logic for handling registration (e.g., saving to a database)
  
  // Send a response back to the client
  res.send({ message: 'Registration successful!' });
});

// Example route for handling login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login details:', { email, password });
  // Check login credentials in the database (or mock login)

  res.send({ message: 'Login successful!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

