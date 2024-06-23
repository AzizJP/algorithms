// ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22450/run-report/115467666/

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

const getMiddleOfIndexes = (a, b) => Math.ceil((b - a) / 2);

const getNullIndexes = (arr) => {
  const finalArr = [];
  arr.forEach((number, index) => {
    if (number === 0) finalArr.push(index);
  });
  return finalArr;
};

const getDistances = (length, plotNumbers) => {
  const distances = [];
  const nullIndexes = getNullIndexes(plotNumbers);
  let currentNullIndex = 0;

  const getTransitionIndex = () =>
    nullIndexes[currentNullIndex] +
    getMiddleOfIndexes(
      nullIndexes[currentNullIndex],
      nullIndexes[currentNullIndex + 1]
    );

  for (let i = 0; i <= length - 1; i++) {
    if (i === getTransitionIndex()) {
      currentNullIndex++;
    }

    distances.push(Math.abs(nullIndexes[currentNullIndex] - i));
  }

  return distances.join(" ");
};

const solve = () => {
  const length = Number(readValue());
  const plotNumbers = readValue()
    .split(" ")
    .map((i) => Number(i));

  const distances = getDistances(length, plotNumbers);

  console.log(distances);
};

process.stdin.on("end", solve);
