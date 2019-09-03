'use strict';

let numbers = [0, 1, 2];

exports.get_numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) return target[prop];
    else                return 0;
  }
});

// console.log(exports.get_numbers[1]);
// console.log(exports.get_numbers[123]);
