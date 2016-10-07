'use strict';

let f1 = (...args) => console.log(args);

f1(1, 2, 3);

let f2 = (...args) => {
  args.forEach(arg => console.log(typeof(arg) + ': ' + arg));
};

f2(1, 'Marcus', { field: 'value' });
