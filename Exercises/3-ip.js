'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const f = (byte, replace) => (byte <<= 8) + parseInt(replace);
  return ip.split('.').reduce(f, 0);
};

// console.log(ipToInt());

module.exports = { ipToInt };
