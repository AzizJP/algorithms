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

const binarySearch = (bankState, price, left, right) => {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  if (bankState[mid] >= price) {
    const result = binarySearch(bankState, price, left, mid - 1);
    return result !== -1 ? result : mid + 1;
  } else {
    return binarySearch(bankState, price, mid + 1, right);
  }
};

const createOutput = (days, bankState, price) => {
  const firstDayForOneBike = binarySearch(
    bankState,
    price,
    0,
    bankState.length
  );
  const firstDayForTwoBikes = binarySearch(
    bankState,
    price * 2,
    0,
    bankState.length
  );

  console.log(firstDayForOneBike, firstDayForTwoBikes);
};

const solve = () => {
  const days = Number(readValue());
  const bankState = readValue()
    .split(" ")
    .map((i) => Number(i));
  const price = Number(readValue());

  createOutput(days, bankState, price, 1);
};

process.stdin.on("end", solve);
