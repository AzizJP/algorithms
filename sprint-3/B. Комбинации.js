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

const phoneMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const createOutput = (digits) => {
  if (digits.length === 0) {
    return [];
  }
  const result = [];

  const backtrack = (combination, nextDigits) => {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      let digit = nextDigits[0];
      let letters = phoneMap[digit];
      for (let i = 0; i < letters.length; i++) {
        backtrack(combination + letters[i], nextDigits.substring(1));
      }
    }
  };

  backtrack("", digits);
  return result;
};

const solve = () => {
  const digits = readValue();
  const combinations = createOutput(digits);
  console.log(combinations.sort().join(" "));
};

process.stdin.on("end", solve);
