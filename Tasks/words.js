// Refactor following solution
// Count words in a string
'use strict'

const countWords = (str) => {
  let numberOfWords = 0;
  let isWord = false;
  for (const char of str) {
    if (!isWord) {
      if (char === ' ') {
        isWord = false;
      } else {
        isWord = true;
        numberOfWords++;
      }
    } else {
      if (char === ' ') {
        isWord = false;
      } else {
        isWord = true;
      }
    }
  }
  return numberOfWords;
};

module.exports = countWords;
