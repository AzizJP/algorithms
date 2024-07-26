/* 
-- ПРИНЦИП РАБОТЫ --
Я реализовал дек с помощью кольцевого буфера фиксированного размера. 
Кольцевой буфер позволяет эффективно использовать память, 
избегая необходимости перемещать элементы при добавлении или удалении.

В деке предусмотрены методы для добавления элементов в начало и конец (push_front и push_back), 
а также для удаления элементов из начала и конца (pop_front и pop_back). 

Для хранения элементов используется массив фиксированного размера, 
а также указатели head и tail для отслеживания начала и конца очереди. 
Для определения текущего размера очереди используется переменная queueSize.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм корректно выполняет все операции с деком в соответствии с ожиданиями. 
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22781/run-report/116391068/

Методы добавления проверяют, заполнен ли дек, и в случае переполнения возвращают ошибку. 
Аналогично, методы удаления проверяют, пуст ли дек, и в случае пустоты возвращают ошибку.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Все операции добавления и удаления (push_front, push_back, pop_front, pop_back) выполняются за O(1),
так как они включают лишь простые манипуляции с индексами и массивом.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность алгоритма составляет O(n),
где n — максимальный размер дека.
*/

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

class Deque {
  constructor(max_size) {
    this.queue = new Array(max_size).fill(null);
    this.head = 0;
    this.tail = 0;
    this.maxSize = max_size;
    this.queueSize = 0;
  }

  _isEmpty() {
    return this.queueSize === 0;
  }

  _isFull() {
    return this.queueSize === this.maxSize;
  }

  push_back(value) {
    if (this._isFull()) return console.log("error");

    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.maxSize;
    this.queueSize += 1;
  }

  push_front(value) {
    if (this._isFull()) return console.log("error");

    this.head = (this.head - 1 + this.maxSize) % this.maxSize;
    this.queue[this.head] = value;
    this.queueSize += 1;
  }

  pop_front() {
    if (this._isEmpty()) return console.log("error");

    const x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.queueSize -= 1;

    return console.log(x);
  }

  pop_back() {
    if (this._isEmpty()) return console.log("error");

    this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
    const x = this.queue[this.tail];
    this.queue[this.tail] = null;
    this.queueSize -= 1;

    return console.log(x);
  }
}

const createOutput = (dequeSize, commands) => {
  const deque = new Deque(Number(dequeSize));

  commands.forEach((command) => {
    const [commandName, argument] = command.split(" ");
    switch (commandName) {
      case "push_back":
        deque.push_back(Number(argument));
        break;
      case "push_front":
        deque.push_front(Number(argument));
        break;
      case "pop_front":
        deque.pop_front();
        break;
      case "pop_back":
        deque.pop_back();
        break;
    }
  });
};

const solve = () => {
  const numberOfCommands = readValue();
  const dequeSize = readValue();
  const commands = _inputLines.slice(2);

  createOutput(dequeSize, commands);
};

process.stdin.on("end", solve);
