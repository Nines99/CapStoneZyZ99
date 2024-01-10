let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.roleController.getRoles(res);

});

router.get('/:id', (req, res) => {
  Controllers.roleController.getRolebyID(req, res)
})

router.post("/create", (req, res) => {
  Controllers.roleController.createRole(req.body, res);

});

router.put('/:id', (req, res) => {
    Controllers.roleController.updateRole(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.roleController.deleteRole(req, res)
})

module.exports = router;
