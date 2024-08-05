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

const createOutput = (n, arr) => {
  let swapped;
  let anySwap = false;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped) {
      console.log(arr.join(" "));
      anySwap = true;
    } else {
      break;
    }
  }

  if (!anySwap) {
    console.log(arr.join(" "));
  }
};

const solve = () => {
  const n = Number(readValue());
  const arr = readValue().split(" ").map(Number);

  createOutput(n, arr);
};

process.stdin.on("end", solve);
