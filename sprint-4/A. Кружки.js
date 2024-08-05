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

const createOutput = (clubNames) => {
  const set = new Set(clubNames);
  return Array.from(set);
};

const solve = () => {
  const n = Number(readValue());
  const clubNames = [];

  for (let i = 0; i < n; i++) {
    clubNames.push(readValue());
  }

  const sequences = createOutput(clubNames);
  sequences.forEach((element) => console.log(element));
};

process.stdin.on("end", solve);
