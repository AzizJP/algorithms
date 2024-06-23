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

const func = (string) => {
  const regExp = /[^\w]|_/g;
  const arr = string
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(regExp, "")
    .split("");
  const reverseArr = [...arr].reverse();
  return arr.join() === reverseArr.join();
};

const solve = () => {
  const string = readValue();

  const isPalindrom = func(string) ? "True" : "False";

  console.log(isPalindrom);
};

process.stdin.on("end", solve);
