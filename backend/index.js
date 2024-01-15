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
  cors()
);
//passing the middlewear
app.use(express.json());

//here different routes used to choose specified backend-file for different end points.
app.use("/", require("./routes/welcome"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`MyStuff app listening on port http://localhost:${port}`);
});
