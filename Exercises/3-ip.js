'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip
    .split('.')
    .reduce(
      (result, current, index) => result + (+current << ((3 - index) * 8)),
      0
    );

module.exports = { ipToInt };
