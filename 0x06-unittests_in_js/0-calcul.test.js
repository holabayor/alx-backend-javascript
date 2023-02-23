const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 10', function () {
    assert.equal(calculateNumber(1.0, 3.0), 4);
  });
});
