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

const func = (s, t) => {
  s = s.split("").sort();
  t = t.split("").sort();
  const longetsArr = s.length > t.length ? s : t;

  for (let i = 0; i <= longetsArr.length - 1; i++) {
    if (s[i] === t[i]) continue;
    if (s[i] !== t[i]) return longetsArr[i];
    return longetsArr.slice(-1);
  }
};

const solve = () => {
  const s = readValue();
  const t = readValue();

  const isAddLetter = func(s, t);

  console.log(isAddLetter);
};

process.stdin.on("end", solve);
