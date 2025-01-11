// Refactor following solution
// Count words in a string
'use strict'

const words = (str) => {
  if (str === '') return 0;
  const arrayOfWords = str.trim().split(' ');
  return arrayOfWords.length;
};

module.exports = words;
