// Refactor following solution
// Sum all number values in dict
'use strict'

const count = (obj) => {
  const values = Object.values(obj);
  const sum = (acc, value) => typeof value === 'number' ? acc += value : acc;
  return values.reduce(sum, 0);
};

module.exports = count;
