'use strict';

const random = (min, max = null) => {
  if (!max) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { random };
