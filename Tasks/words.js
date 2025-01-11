// Refactor following solution
// Count words in a string
'use strict'

const words = (str) => {
  if (str === '') return 0;
  return str.trim().split(/\s+/).length;
};

module.exports = words;
