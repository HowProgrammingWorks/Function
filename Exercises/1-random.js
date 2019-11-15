'use strict';

const random = (min, max) => {
  /// min = Math.floor(min);
  /// max = Math.floor(max);
  const res = Math.floor(Math.random() * (max - min) + min);
  return res;
};

module.exports = { random };
