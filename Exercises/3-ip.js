'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const res = ip.split('.')
    .map(s => Number.parseInt(s))
    .reduce((acc, val) => (acc << 8) + val, 0);
  return res;
};

module.exports = { ipToInt };
