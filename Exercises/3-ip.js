'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.').reverse()
  .reduce((sum, cur, i) =>  sum + (Number(cur) << i * 8), 0);

module.exports = { ipToInt };
