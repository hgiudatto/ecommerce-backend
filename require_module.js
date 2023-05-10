const name = require("./name");
const address = require("./address");

const myname = new name();

console.log(`My name: `, myname.name);
console.log(address.city);
console.log(address.calculateCordinates());
