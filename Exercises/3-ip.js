'use strict';

function ipToInt(ip = '127.0.0.1') {
  return ip.split('.')
    .map(Number)
    .reduce((acc, num) => (acc << 8) + num, 0);
}

module.exports = { ipToInt };
