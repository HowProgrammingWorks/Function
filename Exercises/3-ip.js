'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  let counter = 3;
  const res = ip.split('.')
    .map(x => Number.parseInt(x))
    .reduce((acc, val) => {
      for (let j = counter; j > 0; j--) {
        val = val << 8;
      }
      counter -= 1;
      return acc + val;
    }, 0);
  return res;
}

module.exports = { ipToInt };
