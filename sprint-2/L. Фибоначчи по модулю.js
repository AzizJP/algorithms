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

const createOutput = (number, k) => {
  if (number === 0 || number === 1) return console.log(1);

  const mod = 10 ** k;

  let prev = 1;
  let curr = 1;

  for (let i = 2; i <= number; i++) {
    const next = (prev + curr) % mod;
    prev = curr;
    curr = next;
  }

  console.log(curr);
};

const solve = () => {
  const raw = readValue();
  const rawArr = raw.split(" ");
  const number = Number(rawArr[0]);
  const k = Number(rawArr[1]);

  createOutput(number, k, 0);
};

process.stdin.on("end", solve);
