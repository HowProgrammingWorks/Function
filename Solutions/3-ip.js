'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const octets = ip.split('.');
  const shiftAdd = (acc, octet) => (acc << 8) + parseInt(octet);
  return octets.reduce(shiftAdd, 0);
};

module.exports = { ipToInt };
