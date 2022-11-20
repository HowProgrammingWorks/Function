'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const bitwiseShift = (acc, current) => (acc << 8) + parseInt(current);
  return ip.split('.').reduce(bitwiseShift, 0);
};

module.exports = { ipToInt };
