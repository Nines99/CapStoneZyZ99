let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.requestController.getRequests(res);

});

router.get("/current", (req, res) => {
  Controllers.requestController.getCurrentRequests(res);

});

router.get('/:id', (req, res) => {
  Controllers.requestController.getRequestbyID(req, res)
})

router.post("/create", (req, res) => {
  Controllers.requestController.createRequest(req.body, res);

});

router.put('/:id', (req, res) => {
    Controllers.requestController.updateRequest(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.requestController.deleteRequest(req, res)
})


module.exports = router;