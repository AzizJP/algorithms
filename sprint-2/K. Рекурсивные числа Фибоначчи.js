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

const helper = {};

const createOutput = (number, i) => {
  if (i === 0 || i === 1) {
    helper[i] = 1;
  } else {
    helper[i] = helper[i - 2] + helper[i - 1];
  }
  if (i === number) return console.log(helper[i]);
  createOutput(number, i + 1);
};

const solve = () => {
  const number = Number(readValue());

  createOutput(number, 0);
};

process.stdin.on("end", solve);
