'use strict';

const random = (min, max) => {
  max = Math.floor(max);
  const anyNumber = Math.floor(Math.random() * (max - min)) + min;
  return anyNumber;
};

module.exports = { random };
