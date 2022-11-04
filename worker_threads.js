const express = require("express");
const http = require("http");
const { Worker } = require("worker_threads");

async function init() {
  const port = 5000;
  const app = express();

  const factorialWorker = new Worker("./factorial.js");

  app.get("/", (req, res, next) => {
    console.log("Find factorial of ", req.query.number);
    factorialWorker.postMessage(req.query.number);
    res.json({ message: "All good." });
  });

  factorialWorker.on("message", () => {
    console.log(message, "In parent thread.");
  });

  let httpServer = http.Server(app);

  httpServer.listen(port, () => {
    console.info(`App listening on port: ${port}`);
  });
}

init();
