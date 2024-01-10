"use strict";
let Models = require("../models");
const mongoose = require("mongoose")

const getTeams = (res) => {

  Models.Team.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const getTeambyID = (req, res) => {

  Models.Team.findById(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const createTeam = (data, res) => {
  
  console.log(data);

  new Models.Team(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateTeam = (req, res) => {
  Models.Team.findByIdAndUpdate(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

const deleteTeam = (req, res) => {
  Models.Team.findByIdAndDelete(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

module.exports = {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
  getTeambyID,
}
