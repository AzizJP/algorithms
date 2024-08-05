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

const createOutput = (n, lengths) => {
  lengths.sort((a, b) => b - a);

  let maxPerimeter = 0;

  for (let i = 0; i < n - 2; i++) {
    const a = lengths[i];
    const b = lengths[i + 1];
    const c = lengths[i + 2];

    if (a < b + c) {
      maxPerimeter = a + b + c;
      break;
    }
  }

  console.log(maxPerimeter);
};

const solve = () => {
  const n = Number(readValue());
  const lengths = readValue().split(" ").map(Number);

  createOutput(n, lengths);
};

process.stdin.on("end", solve);
