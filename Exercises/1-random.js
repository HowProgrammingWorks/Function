'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

console.dir(random(0, 100));
module.exports = { random };
