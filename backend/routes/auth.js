//use of the router files -used to send different responce according to endpoint
const express = require("express"); //for server
var bcrypt = require("bcryptjs"); //for validation
const jwt = require("jsonwebtoken"); //for lodin token
const User = require("../models/User");
const { body, validationResult } = require("express-validator"); //for data validation
const fetchuser = require("../middleware/fetchUser");
const router = express.Router();

const jwt_secret = "yaha_pe_signature"; //we have to use .env files to store

//ROUTE1:create a user:POST for endpoint "/api/auth/creataccount".Doesn't require auth
router.post(
  "/creataccount",
  [
    body("name", "Enter a valid name").isLength({ min: 2 }), //here we have set the validations using express validator packege
    body("email", "Enter a valid email").isEmail(),
    body("username", "The user name must have more than 3 characters").isLength({ min: 3 }),
    body("password", "Password must have more than 6 characters").isLength({min: 6}),
  ],
  async (req, res) => {
   let Success=false;
    //if there are errors then it returns Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({Success, errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email }); //check weather user is using unique values
      if (user) {
        return res.status(400).json({Success, error: "email already in use" });
      }
      user = await User.findOne({ username: req.body.username });
      if (user) {
        return res.status(400).json({Success, error: "username already in use" });
      }
      const salt = await bcrypt.genSalt(10); //here we get the salt for password

      const secpass = await bcrypt.hash(req.body.password, salt); //here we convert the password into hash
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwt_secret);
      Success=true;
      res.json({Success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//ROUTE2:Authenticate a user: POST for endpoint"/api/auth/login" no login required
router.post(
  "/login",
  [
    //here we have set the validations using express validator packege
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be blank").exists(),
  ],
  async (req, res) => {
    let Success=false;
    //if there are errors then it returns Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password, username } = req.body;
    try {
      let user = await User.findOne({ email }); //validation for email
      if (!user) {
        return res.status(400).json({Success, error: "Please check your credentials" });
      }

      user = await User.findOne({ username }); //validation for username
      if (!user) {
        return res.status(400).json({Success, error: "Please check your credentials" });
      }
      const passwordConpare = await bcrypt.compare(password, user.password); //this fn will match our db's hash password to the user's entered password
      if (!passwordConpare) {
        return res.status(400).json({Success, error: "Please check your credentials" });
      }
      //if all the validations are true then this data will be send
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwt_secret);
      Success=true;
      res.json({Success, authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error" });
    }
  }
);

//ROUTE3:Get loggedin user delails:POST "/api/auth/getuser" login required(need to send and auth jwt string)
router.post(
  "/getuser",
  fetchuser,
  async (req, res) => {
try {
  userId=req.user.id;
  const user=await User.findById(userId).select("-password");
  res.send(user)
} catch (error) {
  console.error(error)
  res.status(500).json({error:"internal server error"})
}
  });
module.exports = router;
