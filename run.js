const fs = require("fs");
const { spawn } = require("child_process");

// Чтение содержимого файла input.txt
const input = fs.readFileSync("input.txt", "utf8");

// Запуск основного скрипта
const process = spawn("node", ["sprint-2/final/A. Дек.js"]);

// Передача содержимого файла как стандартный ввод для основного скрипта
process.stdin.write(input);
process.stdin.end();

// Вывод данных, полученных из основного скрипта
process.stdout.on("data", (data) => {
  console.log(data.toString());
});

process.stderr.on("data", (data) => {
  console.error(data.toString());
});
