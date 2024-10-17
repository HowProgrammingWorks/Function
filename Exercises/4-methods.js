'use strict';

const methods = iface => {
  // Introspect all properties of iface object and
  // extract function names and number of arguments
  // For example: {
  //   m1: (x) => [x],
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
};

module.exports = { methods };
