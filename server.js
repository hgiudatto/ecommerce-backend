const express = require("express");
const http = require("http");

const app = express();

const httpServer = http.Server(app);

app.get("/api", (req, res) => {
  console.log(`Request query: `, req.query);
  res.send({ fruits: ["banana", "apple", "strawberry", "prune", "mango"] });
});

httpServer.listen(5000, () => {
  console.log("We are listening http server on 5000");
});
