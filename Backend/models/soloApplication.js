const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const soloApplicationSchema = new Schema({

  UserID: { type: Schema.Types.ObjectId, ref: 'user' },
  TeamID: { type: Schema.Types.ObjectId, ref: 'teamRequest' },
  Message: { type: String },
  Date: { type: Date },

  Tank: { type: Boolean, required: true, default: false },
  Damage1:{ type: Boolean, required: true, default: false},
  Damage2: { type: Boolean, required: true, default: false},
  Support1: { type: Boolean, required: true, default: false },
  Support2: { type: Boolean, required: true, default: false },

  Status: { type: String, default: "Pending" },

});

module.exports = mongoose.model("soloApplication", soloApplicationSchema);