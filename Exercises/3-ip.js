'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (previous, current) => (previous << 8) + parseInt(current);
  return ip.split('.').reduce(fn, 0);
};

module.exports = { ipToInt };
