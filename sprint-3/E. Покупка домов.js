const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const createOutput = (n, k, housePrices) => {
  housePrices.sort((a, b) => a - b);

  let totalCost = 0;
  let houseCount = 0;

  for (let i = 0; i < n; i++) {
    if (totalCost + housePrices[i] <= k) {
      totalCost += housePrices[i];
      houseCount++;
    } else {
      break;
    }
  }

  return houseCount;
};

const solve = () => {
  const [n, k] = _inputLines[0].split(" ").map(Number);
  const housePrices = _inputLines[1].split(" ").map(Number);

  const result = createOutput(n, k, housePrices);
  console.log(result);
};

process.stdin.on("end", solve);
