'use strict';

const random = (min, max) => {
  if (min === max) return min;
  const number = min + Math.random() * (max - min);
  return Math.floor(number);
};

module.exports = { random };
