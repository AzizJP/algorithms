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

const func = (X, K) => {
  const arr1 = [...X].reverse();
  const arr2 = [...K].reverse();
  const longetsArr = arr1.length > arr2.length ? arr1 : arr2;
  const cloudNums = [];
  const finalArr = [];

  for (let i = 0; i <= longetsArr.length - 1; i++) {
    let sum = Number(arr1[i] || 0) + Number(arr2[i] || 0);
    if (sum >= 10) {
      if (cloudNums.length) sum += cloudNums.pop();
      finalArr.push(sum % 10);
      cloudNums.push(1);
    } else {
      if (cloudNums.length) sum += cloudNums.pop();
      if (sum === 10) {
        finalArr.push(0);
        cloudNums.push(1);
      } else {
        finalArr.push(sum);
      }
    }
  }

  if (cloudNums.length) {
    finalArr.push(cloudNums.pop());
  }

  return finalArr.reverse().join(" ");
};

const solve = () => {
  const length = readValue();
  const X = readValue().split(" ");
  const K = readValue().split("");

  const numbersString = func(X, K);

  console.log(numbersString);
};

process.stdin.on("end", solve);
