const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teamSchema = new Schema({

  TeamID: { type: mongoose.Types.ObjectId },
  TeamName: {type: String },

});

module.exports = mongoose.model("team", teamSchema);