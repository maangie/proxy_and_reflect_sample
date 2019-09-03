'use strict';

const assert = require('assert');
const { get_numbers } = require('./get_numbers.js');
const { dictionary } = require('./dictionary.js');
const { set_numbers } = require('./set_numbers.js');
const users = require('./users.js');

describe('get numbers', () => {
  it('should return 1 for 1', () => assert.equal(get_numbers[1], 1));
  it('should return 0 for 123', () => assert.equal(get_numbers[123], 0));
});

describe('dictionary', () => {
  it('should return Spanish', () =>
    assert.equal(dictionary['Hello'], 'Hola')
  );

  it('should return English', () =>
    assert.equal(dictionary['Welcome'], 'Welcome')
  );
});

describe('set numbers', () => {
  set_numbers.push(1);
  set_numbers.push(2);

  it('expects the length is 2', () => assert(set_numbers.length == 2));

  it('should throw an error', () =>
    assert.throws(() => set_numbers.push('test'), TypeError)
  );
});

describe('user', () =>
  it ('should hide password', () => {
    let a = [];
    for (let key in users.user) a.push(key);
    assert.deepEqual(a, ['name', 'age']);

    assert.deepEqual(Object.keys(users.user), ['name', 'age']);
    assert.deepEqual(Object.values(users.user), ['John', 30]);
  })
);

describe('empty user', () =>
  it ('should empty', () =>
      assert.deepEqual(Object.keys(users.empty_user), []))
);

describe('enumerable user', () =>
  it ('should 3 properties', () =>
    assert.deepEqual(Object.keys(users.enumerable_user),
                     ['a', 'b', 'c']))
);

describe('open user', () =>
  it ('should be able to access password', () =>
    assert(users.open_user._password)
  )
);

describe('secret user', () => {
  let user;
  beforeEach(function () { user = users.generateSecretUser(); });

  it ('foo', function () {
    let a = [];
    for (let key in user) {
      a.push(key);
    }
    console.log(a);
  });

  it ('should be able to access name', () =>
    assert(user.name)
  );

  it ('should no be able to access password', () =>
    assert.throws(() => user_password, Error, 'Access denied')
  );

  it ('should be able to delete name', () => assert(delete user['name']));

  it ('should not be able to delete password', () => {
    assert.throws(() => delete user['_password'], Error, 'Access denied');
  });

  it ('should list', () => {
    let a = [];
    for (let key in user) {
      a.push(key);
    }

    console.log(a);

  });
});
