/*
-- ПРИНЦИП РАБОТЫ --
Данный скрипт реализует алгоритм сортировки участников по количеству решенных задач и штрафам 
с использованием структуры данных "куча". Участники сортируются по количеству решенных задач 
в порядке убывания, а в случае равенства — по штрафам в порядке возрастания. 

Основные этапы работы:
1. Добавление участников в кучу: Каждый участник добавляется в кучу, что позволяет поддерживать порядок 
при вставке.
2. Сортировка участников: Участники извлекаются из кучи в отсортированном порядке и выводятся на экран.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм корректно добавляет участников в кучу, обеспечивая правильный порядок при извлечении. 
Сортировка по убыванию решенных задач и возрастанию штрафа гарантирует корректный вывод результатов.
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/24810/run-report/119363055/

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Пусть 
n - количество участников,
m - максимальное количество элементов в куче.

Добавление каждого участника в кучу: 
    Сложность составляет O(log n) для каждого добавления. Таким образом, сложность добавления всех участников в кучу равна O(n log n).
Извлечение участников из кучи: 
    Сложность извлечения составляет O(log n) для каждого извлечения. Сложность извлечения всех участников равна O(n log n).
Таким образом, общая временная сложность алгоритма составляет O(n log n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пусть 
p - количество уникальных участников.

Память для хранения участников: 
    Для хранения массива участников требуется O(n) памяти.
Память для кучи: 
    Куча также требует O(n) памяти в худшем случае.

Таким образом, общая пространственная сложность составляет O(n).
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

const compare = (a, b) => {
  if (a[1] !== b[1]) {
    return a[1] < b[1];
  }

  if (a[2] !== b[2]) {
    return a[2] > b[2];
  }

  return a[0] > b[0];
};

const siftUp = (heap, index) => {
  if (index === 1) {
    return;
  }

  const parentIndex = Math.floor(index / 2);
  if (compare(heap[parentIndex], heap[index])) {
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    siftUp(heap, parentIndex);
  }
};

const heapAdd = (heap, key) => {
  heap.push(key);
  const index = heap.length - 1;
  siftUp(heap, index);
};

const siftDown = (heap, index) => {
  const left = 2 * index;
  const right = 2 * index + 1;

  if (left >= heap.length) {
    return;
  }

  const indexLargest =
    right < heap.length && compare(heap[left], heap[right]) ? right : left;

  if (compare(heap[index], heap[indexLargest])) {
    [heap[index], heap[indexLargest]] = [heap[indexLargest], heap[index]];
    siftDown(heap, indexLargest);
  }
};

const popMax = (heap) => {
  const result = heap[1];
  heap[1] = heap[heap.length - 1];
  heap.pop();
  if (heap.length > 1) {
    siftDown(heap, 1);
  }
  return result;
};

const heapsort = (array) => {
  const heap = [null];

  for (let item of array) {
    heapAdd(heap, item);
  }

  const sortedArray = [];
  while (heap.length > 1) {
    const max = popMax(heap);
    sortedArray.push(max);
  }

  return sortedArray;
};

const solve = () => {
  const n = Number(readValue());
  const participants = [];

  for (let i = 1; i <= n; i++) {
    const [login, solved, penalty] = readValue().split(" ");
    participants.push([login, Number(solved), Number(penalty)]);
  }

  const sortedParticipants = heapsort(participants);

  sortedParticipants.forEach((participant) => console.log(participant[0]));
};

process.stdin.on("end", solve);
