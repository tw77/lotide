const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [6] for [1, 2, 5, 6, 7, 6, 3]", () => {
    assert.deepEqual(middle([1, 2, 5, 6, 7, 6, 3]), [6]);
  });
  it("returns [5, 7] for [1, 2, 5, 7, 6, 3]", () => {
    assert.deepEqual(middle([1, 2, 5, 7, 6, 3]), [5, 7]); 
  });
});