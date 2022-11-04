const fs = require("fs");

/**
 *
 * Non blocking - We handle async using callbacks.
 *
 * There are other methods to handle the async methods
 * so we can use promises as well as async await.
 *
 */
fs.writeFile("message.txt", "HEY I AM UPDATED!!", (err, data) => {
  err ? console.log(err) : console.log("FILE CREATED");
});

// Blocking
/* const response = fs.writeFileSync("message.txt", "HEY I AM UPDATED!!");
console.log("FILE IS CREATED", response);

console.log("THIS IS THE ENDO OF FILE"); */
