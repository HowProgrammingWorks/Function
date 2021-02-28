'use strict';

const ipToInt = (ip = '127.0.0.1') => (ip
  .split('.')
  .reduce((num, i) => (num << 8) + parseInt(i), 0));

module.exports = { ipToInt };
