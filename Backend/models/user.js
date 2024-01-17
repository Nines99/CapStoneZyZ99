const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({

  Username: { type: String, trim: true, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Discord: { type: String, required: true },
  BattleTag: { type: String, required: true },
  TeamID: { type: mongoose.Types.ObjectId, ref: 'Team' },
  RoleID: { type: mongoose.Types.ObjectId, ref: 'Role' },
  TeamLeader: { type: Boolean },

});

module.exports = mongoose.model("user", userSchema);
