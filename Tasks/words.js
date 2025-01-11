// Refactor following solution
// Count words in a string
'use strict'

const countWords = (str) => {
  let numberOfWords = 0;
  let isWord = false;
  for (const char of str) {
    if (char === ' ') {
      isWord = false;
    } else {
      if (!isWord) numberOfWords++;
      isWord = true;
    }
  }
  return numberOfWords;
};

module.exports = countWords;
