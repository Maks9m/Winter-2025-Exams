// Refactor following solution
// Get month number
'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const GetMonthNumber = (month) => {
  const monthNumber = (element) => month.toLowerCase().startsWith(element);
  const result = months.findIndex(monthNumber) + 1;
  return result > 0 ? result : -1;
};

module.exports = GetMonthNumber;
