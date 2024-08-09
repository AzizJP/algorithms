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

const createOutput = (n, S, array) => {
  const results = new Set();
  array.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = array[i] + array[j] + array[left] + array[right];

        if (sum === S) {
          const quad = [array[i], array[j], array[left], array[right]];
          results.add(quad.toString());
          left++;
          right--;
        } else if (sum < S) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  const output = Array.from(results)
    .map((str) => str.split(",").map(Number))
    .sort((a, b) => {
      for (let i = 0; i < 4; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });

  return [output.length, ...output];
};

const solve = () => {
  const n = Number(readValue());
  const S = Number(readValue());
  const array = readValue().split(" ").map(Number);

  const output = createOutput(n, S, array);

  output.forEach((i, idx) => {
    if (idx === 0) {
      console.log(i);
    } else {
      console.log(i.join(" "));
    }
  });
};

process.stdin.on("end", solve);
