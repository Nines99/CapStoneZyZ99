const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roleSchema = new Schema({

  RoleID: { type: mongoose.Types.ObjectId },
  RoleName: { type: String }

});

module.exports = mongoose.model("role", roleSchema);
