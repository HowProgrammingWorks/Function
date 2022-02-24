'use strict';

const random = (min = 0, max) => {
  const generatedRandomNumber = Math.random() * (max - min) + min;
  return Math.floor(generatedRandomNumber);
};

module.exports = { random };
