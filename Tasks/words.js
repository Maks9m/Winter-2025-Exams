// Refactor following solution
// Count words in a string
'use strict'

const countWords = (str) => {
  let numberOfWords = 0;
  let isSpace = false;
  for (const char of str) {
    if (!isSpace) {
      if (char === ' ') {
        if (isSpace === true) {
          isSpace = false;
        } else {
          isSpace = false;
        }
      } else {
        if (isSpace === true) {
          isSpace = true;
        } else {
          isSpace = true;
        }
        numberOfWords++;
      }
    } else {
      if (char === ' ') {
        if (isSpace === true) {
          isSpace = false;
        } else {
          isSpace = false;
        }
      } else {
        if (isSpace === true) {
          isSpace = true;
        } else {
          isSpace = true;
        }
      }
    }
  }
  return numberOfWords;
};

module.exports = countWords;
