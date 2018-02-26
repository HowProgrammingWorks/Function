'use strict';

const Context = function() {
  this.name = 'Marcus';
  const city = {
    name: 'Kiev',
    year: 482,
    f1: function() {
      return this.name;
    },
    f2: () => {
      return this.name;
    },
    f3() {
      return this.name;
    }
  };
  return city;
};

const city = new Context();

console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
console.log('city.f3() = ' + city.f3());
