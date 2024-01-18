const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teamSchema = new Schema({

  TeamID: { type: mongoose.Types.ObjectId },
  TeamName: { type: String, required: true },
  Tank: { type: Boolean, required: true, default: false },
  Damage1:{ type: Boolean, required: true, default: false},
  Damage2: { type: Boolean, required: true, default: false},
  Support1: { type: Boolean, required: true, default: false },
  Support2: { type: Boolean, required: true, default: false },

});

module.exports = mongoose.model("team", teamSchema);