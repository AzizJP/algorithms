// ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22450/run-report/115468350/

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

const getPoints = (k, numbers) => {
  let points = 0;

  const numberCount = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  Object.keys(numberCount).map((key) => {
    if (numberCount[key] <= k * 2) points++;
  });

  return points;
};

const solve = () => {
  const k = Number(readValue());
  const numbers = [];

  for (let i = 0; i <= 3; i++) {
    readValue()
      .split("")
      .filter((str) => !Number.isNaN(Number(str)))
      .forEach((num) => numbers.push(num));
  }

  const points = getPoints(k, numbers);

  console.log(points);
};

process.stdin.on("end", solve);
