'use strict';

const DOT = '.';
const BITS = 8;
const bitwiseSum = (a, b) => (a << BITS) + Number(b);

const ipToInt = (ip = '127.0.0.1') => ip
  .split(DOT)
  .reduce(bitwiseSum);

module.exports = { ipToInt };
