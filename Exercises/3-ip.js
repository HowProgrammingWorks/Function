'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.').map(x => +x).reduce((x, y) => (x << 8) + y, 0);

module.exports = { ipToInt };
