const connectTOMongo = require("./db");
const express = require("express");
var cors = require("cors");

//connected to the db.
connectTOMongo();

//created the server port
const app = express();
const port = 5000;
//resolving cors policy error
app.use(
  cors({
    origin: "*",
  })
);
//passing the middlewear
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
if (req.method == "OPTIONS") {
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  return res.status(200).json({});
}

next();
});
//here different routes used to choose specified backend-file for different end points.
app.use("/", require("./routes/welcome"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`MyStuff app listening on port http://localhost:${port}`);
});
