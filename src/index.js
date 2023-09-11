const express = require("express");
const CityRepository = require("./repository/city-repository");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const PORT = process.env.PORT;
  app.listen(PORT, async () => {
    console.log("object listening on port", PORT);
    const repo = new CityRepository();
    // repo.createCity({ name: "Kalyan" });
  });
};
setupAndStartServer();
