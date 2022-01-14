var assert = require('assert');
const sayHello = require('../handlers/sayhello');
const sayGoodBye= require('../handlers/saygoodbye');
const tacos = require('../handlers/tacos');
const { initCrons } = require('../schedular');
const schedular = require('../schedular')
const config = require('../config');

describe('SayHello', function() {
    it('should say hello every 1 min', function() {
      assert.equal(sayHello(),'Hello!');
  });
});

describe('SayGoodBye', function() {
    it('should say goodBye every 1 min', function() {
      assert.equal(sayGoodBye(),'Goodbye!!');
  });
});

describe('Tacos', function() {
    it('should say tacos every 1 min', function() {
      assert.equal(tacos(),'tacos!');
  });
});

// describe('Scheduale', function() {
//   it('should pass', function() {
//     assert.equal(initCrons(config),'Hello!');
// });
// });