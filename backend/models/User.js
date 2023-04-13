const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default:Date.now,
  },
});
const User = mongoose.model("user", userSchema);//parameters passed here are <collectionName>,<collectionSchema>
module.exports = User;
