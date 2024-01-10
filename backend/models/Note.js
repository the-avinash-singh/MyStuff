//models are for controlling the db structure as mongo is not a schema based db
const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,//this how we add a forein key in a collection
    ref:'user'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "general",
  },
  Date: {
    type: Date,
    default:Date.now,
  },
});
module.exports = mongoose.model("notes", NoteSchema);
