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

const transponentMatrix = (matrix, rows, j) => {
  let line = [];

  for (let i = 0; i <= rows - 1; i++) {
    line.push(matrix[i][j]);
  }

  return line.join(" ");
};

const solve = () => {
  const rows = readValue();
  const columns = readValue();
  const matrix = [];

  for (let i = 0; i <= rows - 1; i++) {
    matrix.push(readValue().split(" "));
  }

  for (let j = 0; j <= columns - 1; j++) {
    console.log(transponentMatrix(matrix, rows, j));
  }
};

process.stdin.on("end", solve);
