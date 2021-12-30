'use strict';

const methods = (iface) => Object.values(iface)
  .filter((v) => typeof v === 'function')
  .map((fn) => [fn.name, fn.length]);

module.exports = { methods };
