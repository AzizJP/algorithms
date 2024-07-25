const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
const BRACKETS = { ")": "(", "}": "{", "]": "[" };

_reader.on("line", (line) => {
  _inputLines.push(line);
});

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  getLastItem() {
    if (this.items.length === 0) return false;
    return this.items[this.items.length - 1];
  }
}

const createOutput = (brackets) => {
  let isValid = "True";
  if (!brackets) return console.log(isValid);

  const bracketsList = brackets.split("");
  const stack = new Stack();

  for (let i = 0; i <= bracketsList.length - 1; i++) {
    if (Object.values(BRACKETS).includes(bracketsList[i])) {
      stack.push(bracketsList[i]);
    } else if (!stack.getLastItem()) {
      isValid = "False";
      break;
    } else if (stack.getLastItem() === BRACKETS[bracketsList[i]]) {
      stack.pop();
      isValid = "True";
    } else {
      isValid = "False";
      break;
    }

    if (i === bracketsList.length - 1 && stack.getLastItem()) {
      isValid = "False";
    }
  }

  console.log(isValid);
};

const solve = () => {
  const brackets = _inputLines[0];

  createOutput(brackets);
};

process.stdin.on("end", solve);
