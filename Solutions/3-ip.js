'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn, 0);
};

ipToInt();

module.exports = { ipToInt };


const ip = '127.0.0.1';

//console.log(ip.split('.'));