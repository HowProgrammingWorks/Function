'use strict';

const random = (min, max) => {
  if (min === max) return min;

  const mi = min < 0 ? min = 0 : min;

  return Math.floor(Math.random() * (max - mi + 1)) + mi;
};

module.exports = { random };
