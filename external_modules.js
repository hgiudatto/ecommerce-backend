const express = require("express");
const http = require("http");

const app = express();

const httpServer = http.Server(app);

httpServer.listen(5000, () => {
  console.log("We are listening http server on 5000");
});

app.get("/api", (req, res) => {
  res.send({ fruits: ["banana", "apple", "strawberry", "prune", "mango"] });
});
