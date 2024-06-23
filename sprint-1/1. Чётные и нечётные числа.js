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

const createFinalArr = (values) => {
  const even = values.every((i) => i % 2 === 0);
  const odd = values.every((i) => i % 2 !== 0);
  if (even || odd) return true;
  return false;
};

const solve = () => {
  const values = readValue()
    .split(" ")
    .map((i) => Number(i));

  const finalString = createFinalArr(values) ? "WIN" : "FAIL";

  console.log(finalString);
};

process.stdin.on("end", solve);
