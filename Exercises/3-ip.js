'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  ip = ip.split('.').map((str) => parseInt(str));
  let sum = ip[0];
  for (let i = 1; i < ip.length; i++) {
    sum <<= 8;
    sum += ip[i];
  }
  return sum;
};

module.exports = { ipToInt };
