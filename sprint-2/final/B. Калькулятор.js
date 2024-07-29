/*
-- ПРИНЦИП РАБОТЫ --
Я реализовал вычисление выражений, заданных в обратной польской нотации (ОПН), с помощью стека. 
В ОПН операнды размещаются перед операторами, что позволяет обрабатывать выражения без необходимости использования скобок.

В этом решении я использую стек для хранения чисел. 
Каждый раз, когда встречаю оператор, извлекаю два числа из стека, выполняю операцию и помещаю результат обратно в стек. 
В конце обработки всего выражения в стеке остается единственное число, которое является результатом вычисления.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование стека гарантирует правильный порядок операций, соответствует ожидаемому результату и правилам вычисления ОПН.
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22781/run-report/116481793/

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Пусть 
n — количество элементов в выражении

Обработка каждого элемента выражения происходит за O(1) времени, 
так как операции с числом и стеком занимают постоянное время. 
Поскольку мы проходим через все элементы выражения один раз, 
общая временная сложность составляет O(n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Стэк и массив rpnElements занимают O(n) памяти каждый, т.к. зависят от количества входных данных
Переменные head и prevHead для хранения промежуточных значений и мапа операций занимают O(1) памяти

Следовательно, пространственная сложность алгоритма составляет O(n).
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

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.floor(a / b),
};

const evaluateRPN = (reversePolishNotation) => {
  const stack = [];
  const rpnElements = reversePolishNotation.split(" ");

  rpnElements.forEach((element) => {
    if (!isNaN(element)) {
      stack.push(Number(element));
    } else {
      const head = stack.pop();
      const prevHead = stack.pop();
      const operation = operations[element];

      if (operation) {
        stack.push(operation(prevHead, head));
      }
    }
  });

  return stack.pop();
};

const solve = () => {
  const reversePolishNotation = readValue();

  const result = evaluateRPN(reversePolishNotation);
  console.log(result);
};

process.stdin.on("end", solve);
