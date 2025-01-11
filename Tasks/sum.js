// Refactor following solution
// Sum all numbers from an array
'use strict';

const sum = (arr) => {
  let sumResolt = 0;
  for (const element of arr) {
    if (typeof element === 'number') {
      sumResolt += element;
    }
  }
  return sumResolt;
};

module.exports = sum;
