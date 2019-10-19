'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  let number;
  const res = ip.split('.')
    .map(s => Number.parseInt(s));
  for (let i = 0; i < res.length; i++) {
    number = (number << 8) + res[i];
  }
  return number;
};

module.exports = { ipToInt };
