// Refactor following solution
// Count types in an array
'use strict'

const types = (arr) => {
  const typesCounter = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const values of arr) {
    typesCounter[typeof values]++;
  }
  return typesCounter;
};

module.exports = types;
