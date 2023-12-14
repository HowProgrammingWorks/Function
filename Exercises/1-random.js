'use strict';

const random = (min, max) => {
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { random };

