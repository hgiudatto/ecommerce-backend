const fs = require("fs");

/* fs.appendFile("message.txt", "KODE WITH KAMRAN", (err, data) => {
  err ? console.log(err) : console.log("FILE CREATED");
}); */

/* fs.open("message.txt", "w", (err, data) => {
  err ? console.log(err) : console.log("FILE CREATED");
}); */

/* fs.writeFile("message.txt", "HEY! I AM HERE AGAIN!", (err, data) => {
  err ? console.log(err) : console.log("FILE CREATED");
}); */

/* fs.writeFile("message.txt", "HEY! I AM UPDATED!", (err, data) => {
  err ? console.log(err) : console.log("FILE CREATED");
}); */

fs.unlink("message.txt", (err, data) => {
  err ? console.log(err) : console.log("FILE DELETED");
});
