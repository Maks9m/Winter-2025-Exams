// Refactor following solution
// Count words in a string
'use strict'

const countWords = (str) => {
  let numberOfWords = 0;
  let isWord = false;
  for (const char of str) {
    if (char !== ' ') {
      if (!isWord) numberOfWords++;
      isWord = true;
      continue;
    }
    isWord = false;
  }
  return numberOfWords;
};

module.exports = countWords;
