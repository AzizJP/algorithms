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

class MyQueueSized {
  constructor(max_size) {
    this.queue = new Array(max_size).fill(null);
    this.head = 0;
    this.tail = 0;
    this.maxSize = max_size;
    this.queueSize = 0;
  }

  isEmpty() {
    return this.queueSize === 0;
  }

  push(x) {
    if (this.queueSize < this.maxSize) {
      this.queue[this.tail] = x;
      this.tail = (this.tail + 1) % this.maxSize;
      this.queueSize += 1;
    } else {
      console.log("error");
    }
  }

  pop() {
    if (this.isEmpty()) {
      return console.log("None");
    }
    let x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.queueSize -= 1;
    return console.log(x);
  }

  peek() {
    if (this.isEmpty()) {
      return console.log("None");
    }
    let x = this.queue[this.head];
    return console.log(x);
  }

  size() {
    return console.log(this.queueSize);
  }
}

const createOutput = (queueSize, commands) => {
  const queue = new MyQueueSized(queueSize);

  commands.forEach((command) => {
    switch (command.split(" ")[0]) {
      case "push":
        queue.push(parseInt(command.split(" ")[1]));
        break;
      case "pop":
        queue.pop();
        break;
      case "peek":
        queue.peek();
        break;
      case "size":
        queue.size();
        break;
    }
  });
};

const solve = () => {
  const commandsNumber = readValue();
  const queueSize = readValue();
  const commands = _inputLines.slice(2);

  createOutput(queueSize, commands);
};

process.stdin.on("end", solve);
