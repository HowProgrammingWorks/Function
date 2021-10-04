'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  return ip.split('.').reduce((sum, num) => (sum << 8) + parseInt(num), 0);
};

module.exports = { ipToInt };
