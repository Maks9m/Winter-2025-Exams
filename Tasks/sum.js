// Refactor following solution
// Sum all numbers from an array
'use strict';

const sum = (arr) => {
  const reducer = (acc, value) => (typeof value === 'number' ? (acc += value) : acc);
  return arr.reduce(reducer, 0);
};

module.exports = sum;
