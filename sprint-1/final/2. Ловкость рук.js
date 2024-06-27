// ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22450/run-report/115559451/

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const PLAYERS = 2;
const FIELD_ROWS = 4;
const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const readValue = () => _inputLines[_curLine++];

const getPoints = (k, numbers) => {
  let points = 0;

  const numberCount = numbers
    .filter((number) => !Number.isNaN(number))
    .reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});

  Object.keys(numberCount).map((key) => {
    if (numberCount[key] <= k * PLAYERS) points++;
  });

  return points;
};

const solve = () => {
  const k = Number(readValue());
  const numbers = [];

  for (let i = 1; i <= FIELD_ROWS; i++) {
    readValue()
      .split("")
      .forEach((str) => numbers.push(Number(str)));
  }

  const points = getPoints(k, numbers);

  console.log(points);
};

process.stdin.on("end", solve);
