/*
-- ПРИНЦИП РАБОТЫ --
Данный код реализует хэш-таблицу с цепочками для обработки коллизий, 
используя методы вставки (put), поиска (get) и удаления (delete) элементов.

Основные этапы работы:
1. Хэш-функция: Внутри класса HashTable реализована хэш-функция, которая преобразует ключ в индекс массива. 
  Для обеспечения равномерного распределения используется простое число в качестве размера таблицы.
2. Цепочки для разрешения коллизий: Если два ключа приводят к одному и тому же индексу, 
  значения хранятся в виде цепочки (связанного списка) в этом индексе. Это позволяет избежать перезаписи данных при коллизиях.
3. Вставка данных (put): Если ключ уже существует в таблице, значение обновляется. 
  Если ключ отсутствует, пара "ключ-значение" добавляется в цепочку.
4. Поиск данных (get): Метод возвращает значение, связанное с ключом, или None, если ключ не найден.
5. Удаление данных (delete): Метод удаляет пару "ключ-значение" и возвращает значение или None, если ключ не найден.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм корректно обрабатывает коллизии с помощью цепочек и поддерживает базовые операции с хэш-таблицей: вставку, поиск и удаление данных. 
Использование простого числа в качестве размера таблицы снижает вероятность возникновения длинных цепочек и равномерно распределяет ключи по таблице.
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/24414/run-report/116749535/

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Пусть
n - количество команд
k - количество элементов в цепочке

Методы хэш-таблицы выполняются в среднем за O(1), в худшем случае за O(k)
Общая временная сложность в среднем составляет O(n), в худшем случае O(n * k)


-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пусть
m — размер таблицы (число ячеек)

Пространственная сложность хэш-таблицы определяется её размером и количеством команд: O(m + n).
*/

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;
const NONE = "None";

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const readValue = () => _inputLines[_curLine++];

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    return Math.abs(key) % this.size;
  }

  _fillCell(hashIndex) {
    if (!this.table[hashIndex]) {
      this.table[hashIndex] = [];
    }
  }

  put(key, value) {
    const hashIndex = this._hash(key);
    this._fillCell(hashIndex);
    const chain = this.table[hashIndex];

    for (let i = 0; i < chain.length; i++) {
      if (chain[i][0] === key) {
        chain[i][1] = value;
        return;
      }
    }
    chain.push([key, value]);
  }

  get(key) {
    const hashIndex = this._hash(key);
    this._fillCell(hashIndex);
    const chain = this.table[hashIndex];

    for (let i = 0; i < chain.length; i++) {
      if (chain[i][0] === key) {
        return chain[i][1];
      }
    }
    return NONE;
  }

  _swapAndRemove(chain, index) {
    const lastIndex = chain.length - 1;

    if (index !== lastIndex) {
      [chain[index], chain[lastIndex]] = [chain[lastIndex], chain[index]];
    }

    chain.pop();
  }

  delete(key) {
    const hashIndex = this._hash(key);
    this._fillCell(hashIndex);
    const chain = this.table[hashIndex];

    for (let i = 0; i < chain.length; i++) {
      if (chain[i][0] === key) {
        const value = chain[i][1];
        this._swapAndRemove(chain, i);
        return value;
      }
    }
    return NONE;
  }
}

const createOutput = (n, commands, tableSize) => {
  const hashTable = new HashTable(tableSize);
  const results = [];

  for (let i = 0; i < n; i++) {
    const [command, key, value] = commands[i].split(" ");

    if (command === "put") {
      hashTable[command](key, value);
    } else {
      results.push(hashTable[command](key));
    }
  }

  return results;
};

const solve = () => {
  const n = readValue();
  const commands = _inputLines.slice(1);
  const tableSize = 100003; //простое число

  const output = createOutput(n, commands, tableSize);
  output.forEach((i) => console.log(i));
};

process.stdin.on("end", solve);
