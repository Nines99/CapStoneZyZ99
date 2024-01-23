let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.soloApplicationController.getSApplications(res);
});

router.get('/:id', (req, res) => {
  Controllers.soloApplicationController.getSApplicationbyID(req, res);
})

router.get('/user/:id', (req, res) => {
  Controllers.soloApplicationController.getSApplicationsbyUserID(req, res);
})

router.post("/create", (req, res) => {
  Controllers.soloApplicationController.createSApplication(req.body, res);
});

router.put('/:id', (req, res) => {
    Controllers.soloApplicationController.updateSApplication(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.soloApplicationController.deleteSApplication(req, res);
})

module.exports = router;