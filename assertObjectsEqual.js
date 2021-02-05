const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚀🚀🚀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  for (let i = array2.length - 1; i > -1; i--) {
    if (array2[i] !== array1[i]) {
      return false;
    }
  }
  return true;
};



const eqObjects = function(object1, object2) {
  const object1KeyArray = Object.keys(object1);
  const object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    return false; 
  }

  for (const key of object1KeyArray) {
    if ((Array.isArray(object1[key])) === (Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } 
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObject, expectedObject)) {
    console.log(`🚀🚀🚀 Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
};


// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); 