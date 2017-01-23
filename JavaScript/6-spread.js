'use strict';

const f1 = (...args) => console.log(args);

f1(1, 2, 3);

const f2 = (...args) => {
  args.forEach(arg => {
    if (typeof(arg) === 'object') {
      console.log(typeof(arg) + ': ' + JSON.stringify(arg));
    } else {
      console.log(typeof(arg) + ': ' + arg);
    }
  });
};

f2(1, 'Marcus', { field: 'value' });
