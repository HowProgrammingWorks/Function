'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min) + min);
};
// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN

module.exports = { random };
