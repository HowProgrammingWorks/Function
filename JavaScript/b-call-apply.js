'use strict';

// Immediately-invoked function expression

function f1(a, b) {
  console.log('f1(' + a + ', ' + b + ')');
}

f1(2, 3);
f1.call(null, 2, 3);

f1(...[2, 3]);
f1.apply(null, [2, 3]);
