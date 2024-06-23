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

const func = (str1, str2) => {
  const longestStr = str1.length > str2.length ? str1 : str2;
  const cloudNums = [];
  let finalStr = "";
  const NULL = "0";
  const ONE = "1";
  const equalLengths = str1.length === str2.length;

  str1 = str1.split("").reverse().join("");
  str2 = str2.split("").reverse().join("");

  for (let i = 0; i <= longestStr.length - 1; i++) {
    if (str1[i] === "1" && str2[i] === "1") {
      if (!!cloudNums.length) {
        finalStr = cloudNums.pop() + finalStr;
      } else {
        finalStr = NULL + finalStr;
      }
      cloudNums.push(ONE);
      if (i === longestStr.length - 1 && equalLengths) {
        finalStr = cloudNums.pop() + finalStr;
      }
      continue;
    }

    if (
      (str1[i] === "0" && (str2[i] === "0" || str2[i] === undefined)) ||
      ((str1[i] === "0" || str1[i] === undefined) && str2[i] === "0")
    ) {
      if (!!cloudNums.length) {
        finalStr = cloudNums.pop() + finalStr;
      } else {
        finalStr = NULL + finalStr;
      }
      continue;
    }

    if (
      ((str1[i] === "0" || str1[i] === undefined) && str2[i] === "1") ||
      (str1[i] === "1" && (str2[i] === "0" || str2[i] === undefined))
    ) {
      if (!!cloudNums.length) {
        finalStr = NULL + finalStr;
      } else {
        finalStr = ONE + finalStr;
      }

      if (i === longestStr.length - 1 && !!cloudNums.length) {
        finalStr = cloudNums.pop() + finalStr;
      }
      continue;
    }
  }

  return finalStr;
};

const solve = () => {
  const str1 = readValue();
  const str2 = readValue();

  const isPalindrom = func(str1, str2);

  console.log(isPalindrom);
};

process.stdin.on("end", solve);
