'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = { random };
