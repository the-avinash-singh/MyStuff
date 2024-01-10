const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://admin:pass@cluster0.hakuxin.mongodb.net/mystuff?retryWrites=true&w=majority";

const connectTOMongo = () => {
  main().catch((err) => console.log(err));
  async function main() {
    await mongoose.connect(mongoURI).then(() => console.log("connected"));
  }
};
module.exports = connectTOMongo;
