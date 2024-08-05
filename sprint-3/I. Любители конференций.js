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

const createOutput = (n, ids, k) => {
  const universityCount = new Map();
  for (let id of ids) {
    universityCount.set(id, (universityCount.get(id) || 0) + 1);
  }

  const sortedUniversities = Array.from(universityCount.entries()).sort(
    (a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    }
  );

  const result = sortedUniversities.slice(0, k).map((item) => item[0]);

  console.log(result.join(" "));
};

const solve = () => {
  const n = Number(readValue());
  const ids = readValue().split(" ").map(Number);
  const k = Number(readValue());

  createOutput(n, ids, k);
};

process.stdin.on("end", solve);
