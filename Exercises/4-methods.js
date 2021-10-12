'use strict';

const methods = (iface) => {
  const res = [];
  for (const name in iface) {
    const func = iface[name];
    if (typeof func === 'function') {
      res.push([func.name, func.length]);
    }
  }
  return res;
};
const obj = {
  m1: (x) => [x],
  m2(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};
const res = methods(obj);
console.log(res);
module.exports = { methods };
