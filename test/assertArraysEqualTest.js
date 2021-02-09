const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2], [1, 3]);