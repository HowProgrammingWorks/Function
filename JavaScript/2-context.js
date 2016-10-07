'use strict';

let cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
let f = s => s.length;

function f1() {
  let cities = ['Athens', 'Roma'];
  let f = s => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));

  {
    let f = s => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }

  {
    let cities = ['London', 'Beijing', 'Kiev'];
    console.dir({ cities });
    console.dir(cities.map(f));
  }

}

f1();

console.dir({ cities });
console.dir(cities.map(f));
