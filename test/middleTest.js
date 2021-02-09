const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual((middle([1, 2, 5, 6, 7, 6, 3])), [6]);
assertArraysEqual((middle([1, 2, 5, 7, 6, 3])), [5, 7]);