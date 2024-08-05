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

const createOutput = (n, colors) => {
  if (!n) return;

  let low = 0;
  let mid = 0;
  let high = n - 1;

  while (mid <= high) {
    if (colors[mid] === 0) {
      [colors[low], colors[mid]] = [colors[mid], colors[low]];
      low++;
      mid++;
    } else if (colors[mid] === 1) {
      mid++;
    } else {
      [colors[high], colors[mid]] = [colors[mid], colors[high]];
      high--;
    }
  }

  console.log(colors.join(" "));
};

const solve = () => {
  const n = Number(readValue());
  const colors = readValue().split(" ").map(Number);

  createOutput(n, colors);
};

process.stdin.on("end", solve);
