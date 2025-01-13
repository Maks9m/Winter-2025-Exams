// Refactor following solution
// Get month number
'use strict';

const MONTHS = [
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
  return MONTHS.findIndex(monthNumber) + 1 || -1;
};

module.exports = GetMonthNumber;
