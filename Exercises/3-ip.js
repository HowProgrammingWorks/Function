'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const bitShift = (acc, num, index) => {

    for (let i = 0; i < 3 - index; i++) {
      console.log({ acc, num, index, i, str: `${num} << 8` });
      num = +num << 8;
    }
    return acc + +num;
  };

  return ip.split('.').reduce(bitShift, 0);
};

console.log(ipToInt() === 2130706433);
const l = ipToInt.toString().length;
console.log(`${l} in range [60, 150]?`, l >= 60 && l <= 150);

module.exports = { ipToInt };
