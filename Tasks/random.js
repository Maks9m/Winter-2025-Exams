// Refactor following solution
// Generate random integer value in given range
'use strict'

const random = (min, max = min) => {
  const getInteger = (int) => Math.floor(Math.random() * (int + 1));
  if (max === min) return getInteger(max);
  return min + getInteger(max - min);
};

module.exports = random;
