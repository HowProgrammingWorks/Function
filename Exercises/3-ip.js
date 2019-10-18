'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const sum = (acc, el) => (acc << 8) + Number(el);
  return ip.split('.').reduce(sum, 0);
};
console.error(ipToInt());
module.exports = { ipToInt };
