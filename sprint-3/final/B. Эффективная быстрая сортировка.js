/*
-- ПРИНЦИП РАБОТЫ --
Этот скрипт сортирует список участников соревнования по трём критериям в порядке убывания
при помощи алгоритма быстрой сортировки (QuickSort). 

Критерии сортировки:
1. Количество решённых задач (большее количество решённых задач имеет приоритет).
2. Штрафное время (меньшее штрафное время имеет приоритет при одинаковом количестве решённых задач).
3. Логин (в алфавитном порядке при равенстве первых двух критериев).

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм корректно реализует быструю сортировку с разделением массива на части по опорному элементу. 
Сравнение участников выполняется по указанным критериям, что гарантирует правильный порядок сортировки.
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/23815/run-report/116521265/

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Пусть
n - количество участников.

В среднем временная сложность алгоритма составляет O(n log n)
В худшем случае (при неблагоприятном выборе опорного элемента) сложность может возрасти до O(n^2)

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
В среднем пространственная сложность составляет O(log n) из-за стэка вызовов при использовании рекурсии. 
В худшем случае (при неблагоприятном выборе опорного элемента) сложность может возрасти до O(n)

Дополнительно используется O(n) памяти для хранения массива участников.
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

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    const isSolvedMore = arr[j].solved > pivot.solved;
    const isPenaltyLess =
      arr[j].solved === pivot.solved && arr[j].penalty < pivot.penalty;
    const isLoginEarlier =
      arr[j].solved === pivot.solved &&
      arr[j].penalty === pivot.penalty &&
      arr[j].login < pivot.login;

    if (isSolvedMore || isPenaltyLess || isLoginEarlier) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);

  return i + 1;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
};

const createOutput = (participantsNumber, participants) => {
  quickSort(participants, 0, participantsNumber - 1);

  participants.forEach((participant) => {
    console.log(participant.login);
  });
};

const solve = () => {
  const participantsNumber = Number(readValue());
  const participants = [];

  for (let i = 1; i <= participantsNumber; i++) {
    const [login, solved, penalty] = readValue().split(" ");
    participants.push({
      login,
      solved: Number(solved),
      penalty: Number(penalty),
    });
  }

  createOutput(participantsNumber, participants);
};

process.stdin.on("end", solve);
