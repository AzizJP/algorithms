const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const isSubsequence = (s, t) => {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};

const solve = () => {
  const [s, t] = _inputLines;
  const result = isSubsequence(s, t);
  console.log(result ? "True" : "False");
};

process.stdin.on("end", solve);
