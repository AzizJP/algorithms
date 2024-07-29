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
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22781/run-report/116460682/

Методы добавления проверяют, заполнен ли дек, и в случае переполнения возвращают ошибку. 
Аналогично, методы удаления проверяют, пуст ли дек, и в случае пустоты возвращают ошибку.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Пусть 
n - количество входных команд
m - максимальный размер дека

Поскольку мы проходим через все команды один раз, 
общая временная сложность составляет O(n)
Все операции добавления и удаления (push_front, push_back, pop_front, pop_back) выполняются за O(1),
так как они включают лишь простые манипуляции с индексами и массивом.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность алгоритма составляет O(m)
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

  _increaseIterator(previousIteratorValue) {
    return (previousIteratorValue + 1) % this.maxSize;
  }

  _decreaseIterator(previousIteratorValue) {
    return (previousIteratorValue - 1 + this.maxSize) % this.maxSize;
  }

  pushBack(value) {
    if (this._isFull()) throw new Error();

    this.queue[this.tail] = value;
    this.tail = this._increaseIterator(this.tail);
    this.queueSize += 1;
  }

  pushFront(value) {
    if (this._isFull()) throw new Error();

    this.head = this._decreaseIterator(this.head);
    this.queue[this.head] = value;
    this.queueSize += 1;
  }

  popFront() {
    if (this._isEmpty()) throw new Error();

    const x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = this._increaseIterator(this.head);
    this.queueSize -= 1;

    return x;
  }

  popBack() {
    if (this._isEmpty()) throw new Error();

    this.tail = this._decreaseIterator(this.tail);
    const x = this.queue[this.tail];
    this.queue[this.tail] = null;
    this.queueSize -= 1;

    return x;
  }
}

const map = {
  push_back: "pushBack",
  push_front: "pushFront",
  pop_front: "popFront",
  pop_back: "popBack",
};

const handleCommand = (deque, command) => {
  try {
    const [commandName, argument] = command.split(" ");
    if (argument) {
      deque[map[commandName]](Number(argument));
    } else {
      console.log(deque[map[commandName]]());
    }
  } catch {
    console.log("error");
  }
};

const createOutput = (dequeSize, commands) => {
  const deque = new Deque(Number(dequeSize));

  commands.forEach((command) => handleCommand(deque, command));
};

const solve = () => {
  const numberOfCommands = readValue();
  const dequeSize = readValue();
  const commands = _inputLines.slice(2);

  createOutput(dequeSize, commands);
};

process.stdin.on("end", solve);
