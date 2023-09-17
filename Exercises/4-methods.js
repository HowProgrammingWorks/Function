'use strict';

const methods = (iface) => {
  const functions = Object.values(iface)
    .filter((value) => typeof value === 'function');
  if (functions.length === 0) return;
  return functions.map((fn) => [fn.name, fn.length]);
};

module.exports = { methods };
