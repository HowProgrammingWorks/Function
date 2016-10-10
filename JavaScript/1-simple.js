'use strict';

function inc(a) {
  return ++a;
}

let sum = function(a, b) {
  return a + b;
};

let max = (a, b) => {
  return a > b ? a : b;
};

console.log('inc(5) = ' + inc(5));
console.log('sum(1, 3) = ' + sum(1, 3));
console.log('max(8, 6) = ' + max(8, 6));
