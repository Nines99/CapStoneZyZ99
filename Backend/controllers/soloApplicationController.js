"use strict";
let Models = require("../models");
const mongoose = require("mongoose")

const getSApplications = (res) => {

  Models.SoloApplication.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const getSApplicationbyID = (req, res) => {

  Models.SoloApplication.findById(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const getSApplicationsbyUserID = async (req, res) => {

  const teams = await Models.TeamRequest.find({UserID:req.params.id})
  const teamIDs = teams.map(team => team._id)
  console.log(teamIDs);
  console.log(teams);

  Models.SoloApplication.find({ TeamID: { "$in" : teamIDs} })
    .populate("TeamID")
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createSApplication = (data, res) => {
  
  console.log(data);

  new Models.SoloApplication(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateSApplication = (req, res) => {
  Models.SoloApplication.findByIdAndUpdate(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

const deleteSApplication = (req, res) => {
  Models.SoloApplication.findByIdAndDelete(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

module.exports = {
  getSApplications,
  createSApplication,
  updateSApplication,
  deleteSApplication,
  getSApplicationbyID,
  getSApplicationsbyUserID,
}