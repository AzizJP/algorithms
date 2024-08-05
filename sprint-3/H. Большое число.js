const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const createOutput = (numbers) => {
  numbers.sort((a, b) => (b + a).localeCompare(a + b));

  if (numbers[0] === "0") {
    console.log("0");
  } else {
    console.log(numbers.join(""));
  }
};

const solve = () => {
  const numbers = _inputLines[1].split(" ");

  createOutput(numbers);
};

process.stdin.on("end", solve);
