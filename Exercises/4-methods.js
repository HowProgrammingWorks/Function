'use strict';

const methods = iface => Object.entries(iface)
  .reduce((res, cur) => {
    const value = cur[1];
    if (typeof value === 'function') {
      res.push([cur[0], value.length]);
    }
    return res;
  }, []);

module.exports = { methods };
