// Refactor following solution
// Sum all numbers from an array
'use strict';

const sum = (arr) => {
  return arr.reduce(
    (acc, value) => (typeof value === 'number' ? (acc += value) : acc),
    0,
  );
};

module.exports = sum;
