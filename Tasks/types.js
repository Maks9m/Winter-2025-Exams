// Refactor following solution
// Count types in an array
'use strict'

const types = function (arr) {
  const typesCounter = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const values of arr) {
    const type = typeof values;
    typesCounter[type]++;
  }
  return typesCounter;
};

module.exports = types;
