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

const createFinalArr = (length, values, k) => {
  const finalArr = [];
  for (let i = 0; i <= length - 3; i++) {
    for (let j = i + 1; j <= length - 1; j++) {
      const sum = values[i] + values[j];
      if (sum === k) {
        finalArr.push(values[i], values[j]);
        return finalArr;
      }
    }
  }
  return finalArr;
};

const solve = () => {
  const length = Number(readValue());
  const values = readValue()
    .split(" ")
    .map((i) => Number(i));
  const k = Number(readValue());

  const finalString = createFinalArr(length, values, k).join(" ") || "None";

  console.log(finalString);
};

process.stdin.on("end", solve);
