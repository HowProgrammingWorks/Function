'use strict';

let obj1 = {
  f1: function inc(a) {
    return ++a;
  },
  sum: function(a, b) {
    return a + b;
  },
  max: (a, b) => {
    return a > b ? a : b;
  }
};

console.log('obj1.f1.name = ' + obj1.f1.name);
console.log('obj1.sum.name = ' + obj1.sum.name);
console.log('obj1.max.name = ' + obj1.max.name);

console.log('obj1.f1(5) = ' + obj1.f1(5));
console.log('obj1.sum(1, 3) = ' + obj1.sum(1, 3));
console.log('obj1.max(8, 6) = ' + obj1.max(8, 6));
