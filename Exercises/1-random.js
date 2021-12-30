'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = Math.floor(min);
    min = 0;
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = { random };
