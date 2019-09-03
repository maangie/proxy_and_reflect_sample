'use strict';

let user = {
  name: 'John',
  age: 30,
  _password: '***'
};

exports.user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
});

// for (let key in user) console.log(key);
// console.log(Object.keys(user));
// console.log(Object.values(user));

exports.empty_user = new Proxy({}, {
  ownKeys(target) {
    return ['a', 'b', 'c'];
  }
});

exports.enumerable_user = new Proxy({}, {
  ownKeys(target) {
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

let open_user = { name: 'John', _password: 'secret' };

exports.open_user = open_user;

// FIXME:
exports.generateSecretUser = function () {
  return new Proxy(Object.create(open_user), {
    // get (target, prop) {
    //   if (prop.startsWith('_')) throw new Error('Access denied');
    //   let value = target[prop];
    //   return (typeof value === 'function' ? value.bind(target) : value);
    // },

    // set(target, prop, value) {
    //   if (prop.startsWith('_')) {
    //     throw new Error('Access denied');
    //   } else {
    //     target[prop] = value;
    //     return true;
    //   }
    // },

    // deleteProperty(target, prop) {
    //   if (prop.startsWith('_')) {
    //     throw new Error('Access denied');
    //   } else {
    //     delete target[prop];
    //     return true;
    //   }
    // },

    // ownKeys(target) {
    //   console.log('ownKeys');
    //   console.log(JSON.stringify(target));
    //   console.log(Object.keys(target));
    //   return Object.keys({});
    //   return Object.keys(target).filter(key => key.startsWith('_'));
    // }

    ownKeys: function (target) {
      console.log('ownKeys');
      // return ["a", "b", "c"];
      return Object.keys(target).filter(key => key.startsWith('_'));
    },

    getOwnPropertyDescriptor(target, prop) {
      console.log(`prop: ${prop}`);

      let f = !prop.startsWith('_');

      return {
        enumerable: f,
        configurable: f
      };
    }

  });
}

let secret_user = exports.generateSecretUser();
let a = [];
for (let key in secret_user) {
  a.push(key);
}
console.log(a);
console.log(Object.getOwnPropertyNames(secret_user));
