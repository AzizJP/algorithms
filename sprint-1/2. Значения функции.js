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
  const [a, x, b, c] = values;
  return a * x * x + b * x + c;
};

const solve = () => {
  const values = readValue()
    .split(" ")
    .map((i) => Number(i));

  const finalString = createFinalArr(values);

  console.log(finalString);
};

process.stdin.on("end", solve);
