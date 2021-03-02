'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const arr = ip.split('.').map(x => +x);
  const bitwise = (x, y) => (x << 8) + y;

  return arr.reduce(bitwise, 0);
};

module.exports = { ipToInt };
