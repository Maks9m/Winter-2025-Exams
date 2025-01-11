// Refactor following solution
// Count types in an array
'use strict';

const types = (arr) => {
  const counter = {};
  
  for (const value of arr) {
    const type = typeof value;
    if (!(type in counter)) counter[type] = 0;
    counter[type]++;
  }
  return counter;
};

module.exports = types;
