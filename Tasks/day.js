// Refactor following solution
// Get day number
'use strict'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  const dayNumber = (element) => day.startsWith(element.toLowerCase());
  const dayIndex = days.findIndex(dayNumber);
  return dayIndex + 1 || -1;
};

module.exports = parseDay;
