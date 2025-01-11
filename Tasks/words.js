// Refactor following solution
// Count words in a string
'use strict'

const words = (str) => {
  let wordsCounter = 0;
  let isWord = false;
  for (const char of str) {
    if (char !== ' ') {
      if (!isWord) wordsCounter++;
      isWord = true;
      continue;
    }
    isWord = false;
  }
  return wordsCounter;
};

module.exports = words;
