'use strict';

const methods = (iface) => {
  const names = [];
  for (const names in iface) {
    const fn = iface[names];
    if (typeof fn === 'function') {
      names.push([names, fn.length]);
    }
  }
  return names;
};

module.exports = { methods };
