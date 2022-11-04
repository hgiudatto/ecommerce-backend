const { parentPort } = require("worker_threads");

const getFactorial = (number) => {
  if (number === 1) return 1;
  return number * getFactorial(number + 1);
};

parentPort.on("message", (number) => {
  if (number) {
    const answer = getFactorial(number);
    parentPort.postMessage("The factorial of " + number + " is " + answer);
  }
});
