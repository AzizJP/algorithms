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

  const dictionary = new Set();

  for (let i = 0; i <= length - 1; i++) {
    const secondItem = k - values[i];
    if (dictionary.has(secondItem)) {
      finalArr.push(values[i], secondItem);
      return finalArr;
    }
    dictionary.add(values[i]);
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
