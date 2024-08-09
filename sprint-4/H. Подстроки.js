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

const createOutput = (s) => {
  const seenChars = new Set();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (seenChars.has(s[right])) {
      seenChars.delete(s[left]);
      left++;
    }
    seenChars.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

const solve = () => {
  const s = readValue();

  const maxLength = createOutput(s);
  console.log(maxLength);
};

process.stdin.on("end", solve);
