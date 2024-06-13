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

const createFinalArr = (seconds, values, k) => {
  const finalArr = [];
  let currentSum = values.slice(0, k).reduce((acc, item) => acc + item, 0);
  finalArr.push(currentSum / k);
  for (let i = 0; i <= seconds - 1 - k; i++) {
    currentSum -= values[i];
    currentSum += values[i + k];
    const currentAvg = currentSum / k;
    finalArr.push(currentAvg);
  }
  return finalArr;
};

const solve = () => {
  const seconds = Number(readValue());
  const values = readValue()
    .split(" ")
    .map((i) => Number(i));
  const k = Number(readValue());

  const finalString = createFinalArr(seconds, values, k).join(" ");

  console.log(finalString);
};

process.stdin.on("end", solve);
