const express = require("express");
const Router = express.Router();
Router.get(
  "/",
  async((req, res) => {
    try {
      res.statusCode(200).send({
        message: "Server is on welcome",
      });
    } catch (error) {
      console.log(error);
    }
  })
);
