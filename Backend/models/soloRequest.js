const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const soloRequestSchema = new Schema({

  
  UserID: { type: Schema.Types.ObjectId, ref: 'user' },
  TeamID: { type: Schema.Types.ObjectId, ref: 'team' },
  Message: { type: String },
  Date: { type: Date },

});

module.exports = mongoose.model("soloRequest", soloRequestSchema);