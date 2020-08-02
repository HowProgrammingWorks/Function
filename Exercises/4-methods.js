'use strict';

const methods = iface => {
  const arr = [];
  for (const item in iface) {
    const fn = iface[item];
    if (typeof fn === 'function') {
      arr.push([item, fn.length]);
    }
  }
  return arr;
};

module.exports = { methods };
