let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.teamRequestController.getTeamRequests(res);

});

router.get("/current", (req, res) => {
  Controllers.teamRequestController.getCurrentTeamRequests(res);

});

router.get('/:id', (req, res) => {
  Controllers.teamRequestController.getTeamRequestbyID(req, res)
})

router.post("/create", (req, res) => {
  Controllers.teamRequestController.createTeamRequest(req.body, res);

});

router.put('/:id', (req, res) => {
    Controllers.teamRequestController.updateTeamRequest(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.teamRequestController.deleteTeamRequest(req, res)
})

module.exports = router;
