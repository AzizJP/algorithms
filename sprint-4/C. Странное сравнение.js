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

const areStringsEqual = (n, m) => {
  if (n.length !== m.length) {
    return "NO";
  }

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < n.length; i++) {
    const sChar = n[i];
    const tChar = m[i];

    if (
      (sToT.has(sChar) && sToT.get(sChar) !== tChar) ||
      (tToS.has(tChar) && tToS.get(tChar) !== sChar)
    ) {
      return "NO";
    }

    sToT.set(sChar, tChar);
    tToS.set(tChar, sChar);
  }

  return "YES";
};

const solve = () => {
  const n = readValue();
  const m = readValue();

  const maxLength = areStringsEqual(n, m);
  console.log(maxLength);
};

process.stdin.on("end", solve);
