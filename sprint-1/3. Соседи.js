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

const createFinalArr = (matrix, coords) => {
  const [y, x] = coords;
  const friendsCoordsY =
    y === 0 && y + 1 === matrix.rows
      ? [y]
      : y === 0
      ? [y, y + 1]
      : y + 1 === matrix.rows
      ? [y, y - 1]
      : [y, y - 1, y + 1];
  const friendsCoordsX =
    x === 0 && x + 1 === matrix.columns
      ? [x]
      : x === 0
      ? [x, x + 1]
      : x + 1 === matrix.columns
      ? [x, x - 1]
      : [x, x - 1, x + 1];
  const friends = [];

  friendsCoordsY.forEach((coordY) => {
    friendsCoordsX.forEach((coordX) => {
      const isIncorrectCoords =
        (coordX !== x && coordY !== y) || (coordX === x && coordY === y);
      if (isIncorrectCoords) return;
      friends.push(matrix.arr[coordY][coordX]);
    });
  });
  return friends.sort((a, b) => a - b);
};

const solve = () => {
  const matrix = {
    rows: Number(readValue()),
    columns: Number(readValue()),
    arr: [],
  };

  for (let i = 1; i <= matrix.rows; i++) {
    matrix.arr.push(
      readValue()
        .split(" ")
        .map((value) => Number(value))
    );
  }

  const coords = [Number(readValue()), Number(readValue())];

  const finalString = createFinalArr(matrix, coords).join(" ");

  console.log(finalString);
};

process.stdin.on("end", solve);
