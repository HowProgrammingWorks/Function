'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.').reduce((prev, item) => (prev << 8) + parseInt(item), 0);

module.exports = { ipToInt };
