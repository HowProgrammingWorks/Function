'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  const ipArray = ip.split('.').reduce(fn, 0);
  return ipArray;
};
console.dir(ipToInt);
module.exports = { ipToInt };
