'use strict';

// Introspect all properties of iface object and
// extract function names and number of arguments
// For example: {
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

const methods = iface => {
  const result = [];
  for (const name in iface) {
    if (typeof iface[name] === 'function') {
      result.push([name, iface[name].length]);
    }
  }
  return result;
};

module.exports = { methods };
