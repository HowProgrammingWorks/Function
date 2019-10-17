'use strict';

const random = (min, max) => {
  const random = Math.random();
  const number = random * (max - min) + min;
  const floored = Math.floor(number);
  return floored;
};

module.exports = { random };
