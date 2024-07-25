const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

class Stack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (
      this.maxStack.length === 0 ||
      x >= this.maxStack[this.maxStack.length - 1]
    ) {
      this.maxStack.push(x);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      console.log("error");
      return;
    }
    let poppedValue = this.stack.pop();
    if (poppedValue === this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.pop();
    }
  }

  get_max() {
    if (this.maxStack.length === 0) {
      console.log("None");
      return;
    }
    console.log(this.maxStack[this.maxStack.length - 1]);
  }

  top() {
    if (this.stack.length === 0) {
      console.log("error");
      return;
    }
    console.log(this.stack[this.stack.length - 1]);
  }
}

const createOutput = (commands) => {
  const stack = new Stack();

  commands.forEach((command) => {
    switch (command.split(" ")[0]) {
      case "push":
        stack.push(parseInt(command.split(" ")[1]));
        break;
      case "pop":
        stack.pop();
        break;
      case "get_max":
        stack.get_max();
        break;
      case "top":
        stack.top();
        break;
    }
  });
};

const solve = () => {
  const commands = _inputLines.slice(1);

  createOutput(commands);
};

process.stdin.on("end", solve);
