// Refactor following solution
// Sum all number values in dict
'use strict'

const count = (obj) => {
  let sum = 0;
  const values = Object.values(obj);
  sum = values.reduce((acc, value) => typeof value === 'number' ? acc += value : acc, 0)
  return sum;
};

module.exports = count;
