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

const createOutput = (n) => {
  const result = [];

  const backtrack = (current, open, close) => {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  };

  backtrack("", 0, 0);

  return result;
};

const solve = () => {
  const n = Number(readValue());

  const sequences = createOutput(n);
  sequences.forEach((sequence) => console.log(sequence));
};

process.stdin.on("end", solve);
