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

const func = (number) => {
  const numbers = [];

  const factorize = (num) => {
    if (num === 1) return numbers;
    for (let i = 2; i <= num; i++) {
      if (Number.isInteger(num / i)) {
        numbers.push(i);
        return factorize(num / i);
      }
    }
  };

  if (number < 1) {
    return [];
  }

  factorize(number);
  return numbers;
};

const solve = () => {
  const number = Number(readValue());

  const numbersString = func(number).join(" ");

  console.log(numbersString);
};

process.stdin.on("end", solve);

console.log(func(917521579));
