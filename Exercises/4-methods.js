'use strict';

const methods = iface => {
  const introspection = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      introspection.push([key, iface[key].length]);
    }
  }
  return introspection;
};

module.exports = { methods };
