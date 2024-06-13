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
  const arr = [...values].sort((a, b) => a - b);
  let i = 0;
  let j = length - 1;
  for (i; i <= j - 1; ) {
    for (j; j >= i + 1; ) {
      const sum = arr[i] + arr[j];
      if (sum > k) j--;
      if (sum < k) i++;
      if (sum === k) {
        finalArr.push(arr[i], arr[j]);
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
