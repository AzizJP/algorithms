const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

const readValue = () => _inputLines[_curLine++];

const createFinalArr = (length, arr1, arr2) => {
  const finalArr = [];
  for (let i = 0; i <= length - 1; i++) {
    finalArr.push(arr1[i]);
    finalArr.push(arr2[i]);
  }
  return finalArr;
};

const solve = () => {
  const length = readValue();
  const arr1 = readValue().split(" ");
  const arr2 = readValue().split(" ");

  const finalString = createFinalArr(length, arr1, arr2).join(" ");

  console.log(finalString);
};
