'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const cycle = (acc, val) => (acc << 8) + parseInt(val);
  return ip.split('.').reduce(cycle, 0);
};

/*const ipToInt2 = (ip = '127.0.0.1') => {
  const strIp = ip
    .split('.')
    .map( a => parseInt(a))
    .reduce((acc, val) => (acc << 8) + val);
  return strIp;
};*/

module.exports = { ipToInt };
