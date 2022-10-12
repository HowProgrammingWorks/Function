'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  let sum = 0;
  let count = 3;
  for (let value of ip.split('.')) {
    value = parseInt(value);
    for (let i = 0; i < count; i++) {
      value <<= 8;
    }
    sum += value;
    count--;
  }
  return sum;
};

module.exports = { ipToInt };
