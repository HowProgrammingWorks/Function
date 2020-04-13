'use strict';

const random = (min, max) => //Generate random Number between from min to max;
  //Solution is not short
  Math.floor(Math.random() * (max - min) + min);

module.exports = { random };
