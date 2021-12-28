'use strict';
const methods = (iface) => {
  const keys = [];
  for (const keys in iface) {
    const fn = iface[keys];
    if (typeof fn === 'function') {
      keys.push([keys, fn.length]);
    }
  }
  return keys;
};

module.exports = { methods };
