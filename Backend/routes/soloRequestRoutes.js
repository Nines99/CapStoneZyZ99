let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.soloRequestController.getSoloRequests(res);

});

router.get("/current", (req, res) => {
  Controllers.soloRequestController.getCurrentSoloRequests(res);

});

router.get('/:id', (req, res) => {
  Controllers.soloRequestController.getSoloRequestbyID(req, res)
})

router.post("/create", (req, res) => {
  Controllers.soloRequestController.createSoloRequest(req.body, res);

});

router.put('/:id', (req, res) => {
    Controllers.soloRequestController.updateSoloRequest(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.soloRequestController.deleteSoloRequest(req, res)
})


module.exports = router;