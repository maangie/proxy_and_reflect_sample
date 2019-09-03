'use strict';

let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

exports.dictionary = new Proxy(dictionary, {
  get (target, phrase) {
    if (phrase in target) return target[phrase];
    else                  return phrase;
  }
});

// console.log(exports.dictionary['Hello']);
// console.log(exports.dictionary['Welcome']);
