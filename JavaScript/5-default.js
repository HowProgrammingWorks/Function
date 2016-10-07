'use strict';

function fn(a, b = 'Hello', c = 5) {
  console.dir({ a, b, c });
}

fn(1, 2, 3);
fn(1, 2);
fn(1);
