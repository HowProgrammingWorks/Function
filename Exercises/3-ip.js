'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const bitShift = (acc, num) => (acc << 8) + +num;
  return ip.split('.').reduce(bitShift, 0);
};

console.log(ipToInt() === 2130706433);
const l = ipToInt.toString().length;
console.log(`${l} in range [60, 150]?`, l >= 60 && l <= 150);

module.exports = { ipToInt };
