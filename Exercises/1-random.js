'use strict';

const random = (min, max) => {
  const fraction = Math.random();
  const randomVal =
    Math.floor((1 - fraction) * min + fraction * max);

  return randomVal;
};

module.exports = { random };
