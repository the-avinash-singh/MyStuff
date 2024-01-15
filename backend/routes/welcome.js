const express = require("express");
const Router = express.Router();
Router.get(
  "/",
  (req, res) => {
    try {
        res.status(200).send({
        message: "Server is on welcome",
      });
    } catch (error) {
      console.log(error);
    }
  });
module.exports=Router;