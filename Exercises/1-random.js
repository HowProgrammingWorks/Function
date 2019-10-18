'use strict';

const random = (superPuperMin, superPuperMax) =>
  // eslint-disable-next-line max-len
  Math.floor(Math.random() * (superPuperMax - superPuperMin)) + superPuperMin;

console.log(random(10, 10));
module.exports = { random };
