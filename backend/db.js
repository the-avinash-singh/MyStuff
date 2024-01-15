import { connect } from "mongoose";

const mongoURI =
  "mongodb+srv://admin:pass@cluster0.hakuxin.mongodb.net/mystuff?retryWrites=true&w=majority";

const connectTOMongo = () => {
  main().catch((err) => console.log(err));
  async function main() {
    await connect(mongoURI).then(() => console.log("connected"));
  }
};
export default connectTOMongo;
