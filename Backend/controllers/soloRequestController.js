"use strict";
let Models = require("../models");
const mongoose = require("mongoose")

const getSoloRequests = (res) => {

  Models.SoloRequest.find({})
    // .populate({path: 'user'})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getCurrentSoloRequests = (res) => {

  const today = new Date()
  console.log(today)
  const yesterday = new Date(today.getFullYear(),today.getMonth(),today.getDate()-1,)
  console.log(yesterday)

  Models.SoloRequest.find({Date:{$gte:yesterday}})
    // .populate({path: 'user'})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getSoloRequestbyID = (req, res) => {

  Models.SoloRequest.findById(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const createSoloRequest = (data, res) => {
  
  console.log(data);

  new Models.SoloRequest(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateSoloRequest = (req, res) => {
  Models.SoloRequest.findByIdAndUpdate(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

const deleteSoloRequest = (req, res) => {
  Models.SoloRequest.findByIdAndDelete(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

module.exports = {
  getSoloRequests,
  createSoloRequest,
  updateSoloRequest,
  deleteSoloRequest,
  getSoloRequestbyID,
  getCurrentSoloRequests,
}
