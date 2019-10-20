'use strict';

const ipToInt = ip => {
  const a = ip.split('.').map(x => parseInt(x, 10))
    .reduce((m, n) => (m << 8) + n);
  return a;
};

module.exports = { ipToInt };
