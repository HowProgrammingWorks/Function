'use strict';

const random = (min, max) => {
  const maxNum = max;
  const minNum = min;
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};

module.exports = { random };
