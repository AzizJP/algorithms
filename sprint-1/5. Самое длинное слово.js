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

const func = (values) => {
  let wordIdx = 0;

  for (let i = 0; i <= values.length - 1; i++) {
    if (values[i].length > values[wordIdx].length) wordIdx = i;
  }

  return [values[wordIdx], values[wordIdx].length];
};

const solve = () => {
  const simbols = Number(readValue());
  const values = readValue().split(" ");

  const [word, lenfth] = func(values);

  console.log(word);
  console.log(lenfth);
};

process.stdin.on("end", solve);
