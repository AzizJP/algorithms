const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const createOutput = (n, greedFactors, m, cookieSizes) => {
  greedFactors.sort((a, b) => a - b);
  cookieSizes.sort((a, b) => a - b);

  let childIndex = 0;
  let cookieIndex = 0;
  let satisfiedChildren = 0;

  while (childIndex < n && cookieIndex < m) {
    if (cookieSizes[cookieIndex] >= greedFactors[childIndex]) {
      satisfiedChildren++;
      childIndex++;
    }
    cookieIndex++;
  }

  return satisfiedChildren;
};

const solve = () => {
  const n = parseInt(_inputLines[0], 10);
  const greedFactors = _inputLines[1].split(" ").map(Number);
  const m = parseInt(_inputLines[2], 10);
  const cookieSizes = _inputLines[3].split(" ").map(Number);

  const result = createOutput(n, greedFactors, m, cookieSizes);
  console.log(result);
};

process.stdin.on("end", solve);
