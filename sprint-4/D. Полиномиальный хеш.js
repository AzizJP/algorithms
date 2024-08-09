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

const calculatePolynomialHash = (a, m, s) => {
  let hashValue = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (i === 0) {
      hashValue = charCode % m;
    } else {
      hashValue = (hashValue * a + charCode) % m;
    }
  }

  return hashValue;
};

const solve = () => {
  const a = Number(readValue());
  const m = Number(readValue());
  const s = readValue();

  const hash = calculatePolynomialHash(a, m, s);
  console.log(hash);
};

process.stdin.on("end", solve);
