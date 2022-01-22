'use strict';

const random = (min, max) => {
  if (min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - Math.random() + min));
};

module.exports = { random };
