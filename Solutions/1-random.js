'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  const span = max - min + 1;
  return min + Math.floor(Math.random() * span);
};

module.exports = { random };
