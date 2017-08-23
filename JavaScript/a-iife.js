'use strict';

// Immediately-invoked function expression

(function f1() {
  console.dir('f1');
})();

(function() {
  console.dir('anonymous');
})();

(() => {
  console.dir('lambda');
})();

{
  console.dir('block');
}
