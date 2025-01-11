// Refactor following solution
// Return an array with duplicates
'use strict';

const duplicate = (value, amount) => {
  const result = [];
  for (let i = 0; i < amount; i++) {
    result[i] = value;
  }
  return result;
};

module.exports = duplicate;
