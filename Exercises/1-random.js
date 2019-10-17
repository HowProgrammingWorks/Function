'use strict';

const random = (min, max) => {
  const random = Math.random();
  const number = random * (max - min) + min;
  const res = Math.floor(number);
  return res;
};

module.exports = { random };
