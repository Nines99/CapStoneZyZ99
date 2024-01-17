"use strict";
let Models = require("../models");
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const getUsers = (res) => {

  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const getUserbyID = (req, res) => {

  Models.User.findById(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const createUser = (data, res) => {
  
  console.log(data);

  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  Models.User.findByIdAndUpdate(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

const deleteUser = (req, res) => {
  Models.User.findByIdAndDelete(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

const loginUser = async (req, res) => {
  try {
      // Get user input from request body
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
          res.status(400).json({ result: "All input is required" });
          return; // when sending responses and finishing early, manually return or end the function to stop further processing
      }
      // Validate if user exists in our database
      const user = await Models.User.findOne({ email: email });

      // if they do exist, make sure their password matches - need to check encrypted version of password
      if (user && (await bcrypt.compare(password, user.password))) {
          // Create token for use based on their id and email
          // const token = createToken(user.id, email);
          // // save user token
          // user.token = token;

          console.log(user)

          // send back logged in user details including token
          res.status(200).json({ result: 'User successfully logged in', data: user });
      }
      else res.status(200).json({ result: "Invalid user credentials" });
  } catch (err) {
      console.log(err);
      res.status(500).json({ result: err.message })
  }
}

const registerUser = async (req, res) => {

  try {
      // Get user input by destructuring request body
      const { Username, Email, Discord, BattleTag, Password } = req.body;

      // Validate user input
      if (!(Username && Email && Discord && BattleTag && Password)) {
          res.status(400).json({ result: "All input is required"});
          return; // when sending responses and finishing early, manually return or end the function to stop further processing
      }

      // Validate if user exists in our database
      const oldUser = await Models.User.findOne({ Email });

      if (oldUser) {
          res.status(409).json({ result: "User already exists. Please login" });
          return; // when sending responses and finishing early, manually return or end the function to stop further processing
      }

      // Encrypt user password
      let encryptedPassword = await bcrypt.hash(Password, 10);

      // Create user in our database
      const user = await new Models.User({
          Username,
          Discord,
          BattleTag,
          Email: Email.toLowerCase(), // sanitize: convert email to lowercase
          Password: encryptedPassword})
      .save()

      // // Create token
      // const token = createToken(user.id, email);

      // // save user token to send back to front-end
      // user.token = token;

      // return new user
      res.status(201).json({ result: "User successfully registered", data: user });
  } catch (err) {
      console.log(err);
      res.status(500).json({ result: err.message })
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserbyID,
  loginUser,
  registerUser,
}