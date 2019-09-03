'use strict';

let numbers = [];

exports.set_numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

// exports.set_numbers.push(1);
// exports.set_numbers.push(2);
// console.log('Length is: ', exports.set_numbers.length);
// exports.set_numbers.push('test');
// console.log('This line is never reached (error in the line above)');
