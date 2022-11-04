const fs = require("fs");

// Create a new promise
const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("message.txt", (err, data) => {
      err ? reject(err) : console.log("FILE CONTENT", data.toString());
      resolve(data.toString());
    });
  });
};

// Handling a promise
getData()
  .then((data) => {
    console.log("THIS IS THE END OF FILE.");
  })
  .catch((err) => console.log(err));
