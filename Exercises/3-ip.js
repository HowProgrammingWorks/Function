'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.').reduce(
  (sum, elem, i, arr) => sum + (Number(elem) << 8 * (arr.length - 1 - i))
  , 0);

module.exports = { ipToInt };
