const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const requestSchema = new Schema({

  RequestID: { type: mongoose.Types.ObjectId },
  UserID: { type: mongoose.Types.ObjectId, ref: 'User' },
  TeamID: { type: mongoose.Types.ObjectId, ref: 'Team' },
  Message: { type: String },
  Date: { type: Date },

});

module.exports = mongoose.model("request", requestSchema);