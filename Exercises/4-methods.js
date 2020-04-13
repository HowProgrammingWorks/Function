'use strict';

const methods = iface => {
  const arr = [];
  for (const key in iface) {
    const type = typeof iface[key];
    if (type === 'function') {
      arr.push([key, iface[key].length]);
    }
  }
  return arr;
};

module.exports = { methods };
