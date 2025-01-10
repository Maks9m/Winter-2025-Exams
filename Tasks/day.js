// Refactor following solution
// Get day number
'use strict'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  const dayIndex = days.findIndex((element) => day.startsWith(element.toLowerCase()));
  if (dayIndex + 1 > 0) return dayIndex + 1;
  return -1;
};

module.exports = parseDay;
