// Refactor following solution
// Sum all numbers from an array
'use strict'

const sum = (arr) => {
  const sumResolts = [0];
  for (const element of arr) {
    const type = typeof element;
    if (type === 'number') {
      if (sumResolts.length > 0) {
        const newSum = sumResolts[sumResolts.length - 1] + element;
        sumResolts.push(newSum);
      }
    }
  }
  return sumResolts[sumResolts.length - 1];
};

module.exports = sum;
