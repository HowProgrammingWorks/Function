'use strict';

const methods = (iface) => {
  const results = [];
  for (const key in iface) {
    const callback = iface[key];
    if (typeof callback !== 'function') return;
    results.push([callback.name, callback.length]);
  }
  return results;
};

module.exports = { methods };
