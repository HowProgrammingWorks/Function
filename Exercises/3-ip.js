'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const a = ip.split('.').map(Number);
  a[0]=a[0] <<24;
  a[1]=a[1] <<16;
  a[2]=a[2] <<8;
  return a.reduce((b,c)=>b+c);
  };

module.exports = { ipToInt };
