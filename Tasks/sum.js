// Refactor following solution
// Sum all numbers from an array
'use strict';

const sum = (arr) => {
  let sumResolt = 0;
  sumResolt = arr.reduce(
    (acc, value) => (typeof value === 'number' ? (acc += value) : acc),
    sumResolt,
  );
  return sumResolt;
};

module.exports = sum;
