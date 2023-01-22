'use strict';

const methods = (iface) => {
  const results = [];
  for (const fnName in iface) {
    const callback = iface[fnName];
    if (typeof callback !== 'function') return;
    results.push([fnName, callback.length]);
  }
  return results;
};

module.exports = { methods };
