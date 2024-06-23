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

const getChaoticDays = (days, values) => {
  let chaoticDays = 0;
  if (days === 1) {
    chaoticDays++;
    return chaoticDays.toString();
  }
  for (let i = 0; i <= days - 1; i++) {
    if (i === 0 && values[i] > values[i + 1]) {
      chaoticDays++;
    }
    if (i === days - 1 && values[i] > values[i - 1]) {
      chaoticDays++;
    }
    if (values[i] > values[i + 1] && values[i] > values[i - 1]) {
      chaoticDays++;
    }
  }
  return chaoticDays.toString();
};

const solve = () => {
  const days = Number(readValue());
  const values = readValue()
    .split(" ")
    .map((i) => Number(i));

  const finalString = getChaoticDays(days, values);

  console.log(finalString);
};

process.stdin.on("end", solve);

// console.log(getChaoticDays(7, [-1, -10, -8, 0, 2, 0, 5]));
