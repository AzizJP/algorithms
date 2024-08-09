/*
-- ПРИНЦИП РАБОТЫ --
Данный скрипт реализует систему поиска по документам, используя инвертированный индекс. 
Инвертированный индекс позволяет эффективно находить документы, содержащие определенные слова, 
и ранжировать их по релевантности для каждого запроса.

Основные этапы работы:
1. Создание инвертированного индекса: Каждое слово из документов связывается с индексами документов, в которых оно встречается.
2. Обработка запросов: Для каждого запроса подсчитывается релевантность документов, основываясь на количестве вхождений слов из запроса в документ. 
Запросы кэшируются, чтобы избежать повторной обработки одного и того же запроса.
3. Сортировка и фильтрация: Документы сортируются по релевантности, и выводятся топ-5 документов для каждого запроса.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм корректно строит инвертированный индекс и на основе него рассчитывает релевантность документов по каждому запросу. 
Сортировка по убыванию релевантности и фильтрация топ-5 документов обеспечивает требуемую функциональность.
ОТЧЕТ по ссылке https://contest.yandex.ru/contest/24414/run-report/116701993/

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Пусть 
n - количество документов,
l - максимальное количество слов в документе,
m - количество запросов,
k - количество уникальных слов в запросе,
t - максимальное количество документов, содержащих слово.  
d - количество релевантных документов, равном значению numberOfRelevantDocuments

Создание инвертированного индекса: 
  Сложность создания инвертированного индекса составляет O(n * l).
Обработка запросов: 
  Для каждого запроса сложность поиска релевантных документов составляет O(k * t).
  Сортировка релевантных документов занимает O(d log d).
  Таким образом, сложность обработки всех запросов - O(m * (k * t + d log d)).
Кэширование:
  Использование кэша позволяет ускорить повторную обработку одних и тех же запросов, 
  снижая временные затраты до O(1) при повторных вызовах.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пусть 
w - количество уникальных слов в документе
p - количество уникальных запросов

Инвертированный индекс: 
  Требует O(w * n) памяти, в которых встречается слово.
Кэш: 
  Пространственная сложность для кэша - O(p * d)
Дополнительная память: 
  Для хранения списка релевантности, промежуточных массивов и результатов сортировки используется O(d) памяти.
*/

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;
const numberOfRelevantDocuments = 5;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const readValue = () => _inputLines[_curLine++];

const createInvertedIndex = (documents) => {
  const index = new Map();

  documents.forEach((doc, docIndex) => {
    const words = doc.split(" ");
    words.forEach((word) => {
      if (!index.has(word)) {
        index.set(word, []);
      }
      const docList = index.get(word);
      docList.push(docIndex);
    });
  });

  return index;
};

const processQueryWithInvertedIndex = (
  invertedIndex,
  query,
  docCount,
  cache
) => {
  if (cache.has(query)) {
    return cache.get(query);
  }

  const queryWords = [...new Set(query.split(" "))];
  const relevance = new Array(docCount).fill(0);

  queryWords.forEach((word) => {
    if (invertedIndex.has(word)) {
      const docList = invertedIndex.get(word);
      docList.forEach((docIndex) => {
        relevance[docIndex]++;
      });
    }
  });

  const result = sortAndFilterRelevances(relevance);
  cache.set(query, result);

  return result;
};

const sortAndFilterRelevances = (relevances) => {
  const relevancesWithIndex = relevances
    .map((rel, index) => ({ relevance: rel, index }))
    .filter((rel) => rel.relevance > 0)
    .slice(0, numberOfRelevantDocuments);

  relevancesWithIndex.sort((a, b) => {
    if (b.relevance === a.relevance) {
      return a.index - b.index;
    }
    return b.relevance - a.relevance;
  });

  return relevancesWithIndex.map((rel) => rel.index + 1);
};

const createOutput = (documents, queries, documentsLength) => {
  const invertedIndex = createInvertedIndex(documents);
  const cache = new Map();
  const results = queries.map((query) =>
    processQueryWithInvertedIndex(invertedIndex, query, documentsLength, cache)
  );

  return results;
};

const solve = () => {
  const n = parseInt(readValue().trim(), 10);
  const documents = _inputLines.slice(1, n + 1);
  const m = parseInt(_inputLines[n + 1].trim(), 10);
  const queries = _inputLines.slice(n + 2, n + 2 + m);

  const output = createOutput(documents, queries, n);
  output.forEach((line) => console.log(line.join(" ")));
};

process.stdin.on("end", solve);
