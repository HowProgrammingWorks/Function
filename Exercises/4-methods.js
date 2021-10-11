'use strict';

const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};

module.exports = { methods };
