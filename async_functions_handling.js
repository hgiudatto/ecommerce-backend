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

const main = async () => {
  const data = await getData();
  console.log(`Data: `, data);
};

main();
