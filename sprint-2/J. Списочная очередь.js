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

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.queueSize = 0;
  }

  isEmpty() {
    return this.queueSize === 0;
  }

  put(x) {
    const newNode = new Node(x);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.queueSize += 1;
  }

  get() {
    if (this.isEmpty()) {
      return console.log("error");
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.queueSize -= 1;
    return console.log(value);
  }

  size() {
    return console.log(this.queueSize);
  }
}

const createOutput = (commands) => {
  const queue = new LinkedListQueue();

  commands.forEach((command) => {
    const [cmd, value] = command.split(" ");

    switch (cmd) {
      case "put":
        queue.put(parseInt(value));
        break;
      case "get":
        queue.get();
        break;
      case "size":
        queue.size();
        break;
    }
  });
};

const solve = () => {
  const commandsNumber = readValue();
  const commands = _inputLines.slice(1);

  createOutput(commands);
};

process.stdin.on("end", solve);
