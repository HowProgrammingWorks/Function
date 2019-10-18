'use strict';

const methods = iface => {
  const res = [];
  for (const key in iface) {
    const value = iface[key];
    if (typeof value === 'function') {
      res.push([value.name, value.length]);
    }
  }
  return res;
};

module.exports = { methods };
