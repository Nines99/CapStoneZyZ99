const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const soloRequestSchema = new Schema({

  
  UserID: { type: Schema.Types.ObjectId, ref: 'user' },
  TeamID: { type: Schema.Types.ObjectId, ref: 'teamRequest' },
  Message: { type: String },
  Date: { type: Date },

  Status: { type: String, default: "Pending" },

});

module.exports = mongoose.model("soloRequest", soloRequestSchema);