"use strict";
let Models = require("../models");
const mongoose = require("mongoose")

const getTeamRequests = (res) => {

  Models.TeamRequest.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const getCurrentTeamRequests = (res) => {

  const today = new Date()
  console.log(today)
  const yesterday = new Date(today.getFullYear(),today.getMonth(),today.getDate()-1,)
  console.log(yesterday)

  Models.TeamRequest.find({Date:{$gte:yesterday}})
    // .populate({path: 'user'})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getTeamRequestbyID = (req, res) => {

  Models.TeamRequest.findById(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const createTeamRequest = (data, res) => {
  
  console.log(data);

  new Models.TeamRequest(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateTeamRequest = (req, res) => {
  Models.TeamRequest.findByIdAndUpdate(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

const deleteTeamRequest = (req, res) => {
  Models.TeamRequest.findByIdAndDelete(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

module.exports = {
  getTeamRequests,
  createTeamRequest,
  updateTeamRequest,
  deleteTeamRequest,
  getTeamRequestbyID,
  getCurrentTeamRequests,
}
