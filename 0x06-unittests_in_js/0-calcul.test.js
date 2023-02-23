const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 8', function () {
    assert.strictEqual(calculateNumber(4.0, 3.6), 8);
  });

  it('should return 4', function () {
    assert.strictEqual(calculateNumber(1.0, 2.7), 4);
  });

  it('should return 6', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 2', function () {
    assert.strictEqual(calculateNumber(-1.0, 2.7), 2);
  });

  it('should return 5', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
});
