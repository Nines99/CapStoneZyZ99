"use strict";
let Models = require("../models");
const mongoose = require("mongoose")

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

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserbyID,
}