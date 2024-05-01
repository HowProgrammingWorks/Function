'use strict';

const ipToInt = (ip = '10.0.0.1') => {
  const fn = (acc, el) => (acc << 8) + parseInt(el);
  return ip.split('.').reduce(fn, 0);
};

module.exports = { ipToInt };
