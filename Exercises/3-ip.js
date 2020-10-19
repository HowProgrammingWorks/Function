'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  let i = 24, res = 0;

  ip.split('.').reduce((acc, el) => (res = +acc + (+el << i), i -= 8, res), 0);

  return res;
};

module.exports = { ipToInt };
