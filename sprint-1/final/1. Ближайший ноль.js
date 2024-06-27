// ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22450/run-report/115559135/

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

const getDistancesOfLeftNull = (plotNumbers) => {
  let distanceOfLeftNull = 0;
  let passedFirstNull = false;
  return plotNumbers.map((number) => {
    if (number === 0) {
      passedFirstNull = true;
      distanceOfLeftNull = 0;
      return distanceOfLeftNull;
    }
    if (!passedFirstNull) {
      distanceOfLeftNull = plotNumbers.length;
      return distanceOfLeftNull;
    }
    distanceOfLeftNull++;
    return distanceOfLeftNull;
  });
};

const getDistances = (plotNumbers) => {
  const distancesOfLeftNull = getDistancesOfLeftNull(plotNumbers);
  const distancesOfRightNull = getDistancesOfLeftNull(
    [...plotNumbers].reverse()
  ).reverse();

  const distances = plotNumbers.map((number, index) => {
    if (distancesOfLeftNull[index] > distancesOfRightNull[index])
      return distancesOfRightNull[index];
    return distancesOfLeftNull[index];
  });

  return distances.join(" ");
};

const solve = () => {
  const length = Number(readValue());
  const plotNumbers = readValue()
    .split(" ")
    .map((i) => Number(i));

  const distances = getDistances(plotNumbers);

  console.log(distances);
};

process.stdin.on("end", solve);
