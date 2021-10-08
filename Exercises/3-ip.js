'use strict';

const ipToInt = (ip = '127.0.0.1') => ip
  .split('.').reverse().reduce((sum, cur, i) => {
    cur = parseInt(cur, 10);
    return sum += cur << (8 * i);
  }, 0);

module.exports = { ipToInt };
