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

const findLongestTie = (n, rounds) => {
  // Хеш-таблица для хранения префиксных сумм и их индексов
  let prefixSumMap = new Map();
  prefixSumMap.set(0, -1); // Для корректного учета отрезка с начала массива

  let maxLength = 0;
  let prefixSum = 0;

  for (let i = 0; i < n; i++) {
    if (rounds[i] === 0) {
      prefixSum += 1;
    } else {
      prefixSum -= 1;
    }

    if (prefixSumMap.has(prefixSum)) {
      // Если такая префиксная сумма уже встречалась, то найден участок с равным количеством 0 и 1
      let prevIndex = prefixSumMap.get(prefixSum);
      maxLength = Math.max(maxLength, i - prevIndex);
    } else {
      // Иначе сохраняем текущий индекс для этой суммы
      prefixSumMap.set(prefixSum, i);
    }
  }

  return maxLength;
};

const solve = () => {
  const n = Number(readValue());
  const rounds = readValue().split(" ").map(Number);

  const maxLength = findLongestTie(n, rounds);
  console.log(maxLength);
};

process.stdin.on("end", solve);
