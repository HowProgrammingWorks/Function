'use strict';

const ipToInt = (ip = '10.0.0.1') => {
  const callback = (acc, item) => (acc << 8) + parseInt(item);
  const out = ip.split('.').reduce(callback, 0);
  return out;
};

module.exports = { ipToInt };
