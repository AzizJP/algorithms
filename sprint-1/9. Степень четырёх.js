const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const readValue = () => _inputLines[_curLine++];

const func = (number) => {
  let sum = 0;

  for (let i = 0; sum <= number; i++) {
    sum = Math.pow(4, i);
    if (sum === number) return true;
    if (sum > number) return false;
  }
};

const solve = () => {
  const number = Number(readValue());

  const isFourPow = func(number) ? "True" : "False";

  console.log(isFourPow);
};

process.stdin.on("end", solve);
