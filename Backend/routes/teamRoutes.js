let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.teamController.getTeams(res);

});

router.get('/:id', (req, res) => {
  Controllers.teamController.getTeambyID(req, res)
})

router.post("/create", (req, res) => {
  Controllers.teamController.createTeam(req.body, res);

});

router.put('/:id', (req, res) => {
    Controllers.teamController.updateTeam(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.teamController.deleteTeam(req, res)
})

module.exports = router;
