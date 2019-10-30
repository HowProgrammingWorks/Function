'use strict';
const { random: frandom, floor: trunc } = Math;
const random = (min, max) => {
  if (typeof(max) === 'undefined') {
    max = min;
    min = 0;
  }
  return trunc((max - min + 1) * frandom() + min);
};

module.exports = { random };
