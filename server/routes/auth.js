const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const env = require("dotenv/config");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51LoQRhSBQQqtWU9rZZJYrIQEOsM33ZBUI0KYRCF1HiBNNr9c3S8QJCJciXbBPhvW37PMpJ3mYzyocObCmjdFEN4B00fjvoZj4k');

const JWT_SECRET = "secretkeyforsession";

var charge = await stripe.charges.retrieve(
  'ch_3LoRAP2eZvKYlo2C0h9V6hZg',
  {
    apiKey: 'sk_test_51LoQRhSBQQqtWU9rZZJYrIQEOsM33ZBUI0KYRCF1HiBNNr9c3S8QJCJciXbBPhvW37PMpJ3mYzyocObCmjdFEN4B00fjvoZj4k'
  }
);

// AUTH ROUTES :
// Route1: signup
router.post("/signup", async (req, res) => {
  let success = false;
  try {
    //check whteher user with this email exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({
        success,
        error: "Please give unique email value,  as email already registered",
      });
    }
    //hash password
    var salt = await bcrypt.genSalt(10);
    console.log(req.body.password);
    var secPass = await bcrypt.hash(req.body.password, salt);
    //if no user exists, then create new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });
    const data = {
      session: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authToken, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success,
      error: error.message,
    });
  }
});

//Route2: login: authenticate
router.post(
  "/login",
  body("email", "Enter a valid email").isEmail(),
  async (req, res) => {
    let success = false;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      //check whether user with this email exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).send({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const data = {
        session: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken, user });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Oops internal server error occured");
    }
  }
);

// ROUTE3: Get logged in user details: login required
router.get("/getUser", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

module.exports = router;
