"use strict";
let Models = require("../models");
const mongoose = require("mongoose")

const getRequests = (res) => {

  Models.Request.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const getRequestbyID = (req, res) => {

  Models.Request.findById(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const createRequest = (data, res) => {
  
  console.log(data);

  new Models.Request(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateRequest = (req, res) => {
  Models.Request.findByIdAndUpdate(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

const deleteRequest = (req, res) => {
  Models.Request.findByIdAndDelete(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

module.exports = {
  getRequests,
  createRequest,
  updateRequest,
  deleteRequest,
  getRequestbyID,
}
