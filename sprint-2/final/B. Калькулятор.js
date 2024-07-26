/*
-- ПРИНЦИП РАБОТЫ --
Я реализовал вычисление выражений, заданных в обратной польской нотации (ОПН), с помощью стека. 
В ОПН операнды размещаются перед операторами, что позволяет обрабатывать выражения без необходимости использования скобок.

В этом решении я использую стек для хранения чисел. 
Каждый раз, когда встречаю оператор, извлекаю два числа из стека, выполняю операцию и помещаю результат обратно в стек. 
В конце обработки всего выражения в стеке остается единственное число, которое является результатом вычисления.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование стека гарантирует правильный порядок операций, соответствует ожидаемому результату и правилам вычисления ОПН.
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/22781/run-report/116394584/

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Обработка каждого элемента выражения происходит за O(1) времени, 
так как операции с числом и стеком занимают постоянное время. 
Поскольку мы проходим через все элементы выражения один раз, 
общая временная сложность составляет O(n), где n — количество элементов в выражении.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность алгоритма составляет O(n),
где n — количество чисел в выражении.
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

const processOperator = (operator, stack) => {
  const head = stack.pop();
  const prevHead = stack.pop();
  switch (operator) {
    case "+":
      stack.push(prevHead + head);
      break;
    case "-":
      stack.push(prevHead - head);
      break;
    case "*":
      stack.push(prevHead * head);
      break;
    case "/":
      stack.push(Math.floor(prevHead / head));
      break;
  }
};

const createOutput = (reversePolishNotation) => {
  const stack = [];
  const rpnElements = reversePolishNotation.split(" ");

  rpnElements.forEach((element) => {
    if (!isNaN(element)) {
      stack.push(Number(element));
    } else {
      processOperator(element, stack);
    }
  });

  const result = stack.pop();
  console.log(result);
};

const solve = () => {
  const reversePolishNotation = readValue();

  createOutput(reversePolishNotation);
};

process.stdin.on("end", solve);
