'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const ipNumber = ip.split('.')
    .reduce((sum, cur) => (sum << 8) + parseInt(cur));
  return ipNumber;
};
module.exports = { ipToInt };
