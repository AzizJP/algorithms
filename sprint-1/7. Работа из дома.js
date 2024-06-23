const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;
let binaryString = "";

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const readValue = () => _inputLines[_curLine++];

const func = (number) => {
  const integer = Math.floor(number / 2);
  const remainder = number % 2;
  binaryString = remainder + binaryString;
  if (integer === 0) return binaryString;
  return func(integer);
};

const solve = () => {
  const number = Number(readValue());

  const isPalindrom = func(number);

  console.log(isPalindrom);
};

process.stdin.on("end", solve);
