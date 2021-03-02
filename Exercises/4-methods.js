'use strict';

const methods = iface => {
  const arr = [];
  for (const value in iface) {
    const func = iface[value];
    if (typeof func === 'function') {
      arr.push([value, func.length]);
    }
  }
  return arr;
};

module.exports = { methods };
