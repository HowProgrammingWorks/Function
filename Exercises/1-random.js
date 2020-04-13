'use strict';
// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN


const random = (min, max) => {
  const rand = Math.random();
  const value = rand * (max - min + 1) + min;
  const result = Math.floor(value);
  return result;
};

module.exports = { random };
