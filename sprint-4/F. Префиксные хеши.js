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

const createOutput = (a, m, s, queries) => {
  const n = s.length;

  const prefixHashes = new Array(n + 1).fill(0);
  const aPowers = new Array(n + 1).fill(0);

  prefixHashes[0] = 0;
  aPowers[0] = 1;

  for (let i = 1; i <= n; i++) {
    prefixHashes[i] = (prefixHashes[i - 1] * a + s.charCodeAt(i - 1)) % m;
    aPowers[i] = (aPowers[i - 1] * a) % m;
  }

  const results = [];
  for (const [l, r] of queries) {
    let hashValue =
      (prefixHashes[r] - ((prefixHashes[l - 1] * aPowers[r - l + 1]) % m) + m) %
      m;
    results.push(hashValue);
  }

  return results;
};

const solve = () => {
  const a = Number(readValue());
  const m = Number(readValue());
  const s = readValue();
  const t = Number(readValue());

  const queries = [];
  for (let i = 0; i < t; i++) {
    const [l, r] = readValue().split(" ").map(Number);
    queries.push([l, r]);
  }

  const output = createOutput(a, m, s, queries);
  console.log(output.join("\n"));
};

process.stdin.on("end", solve);
