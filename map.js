const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


// const results1 = map(words, word => word[0]);
// console.log(results1);


// for testing...

const assertArraysEqual = function(actualArray, expectedArray) {
  let isTrue = 1;

  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      isTrue -= 1;
      console.log(`🚫🚫🚫 Assertion Failed: ${actualArray} !== ${expectedArray}`);
    }
  }

  if (isTrue) {
    console.log(`🚀🚀🚀 Assertion Passed: ${actualArray} === ${expectedArray}`);
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
  for (let i = array2.length -1; i > -1; i--) {
    if (array2[i] !== array1[i]) {
      return false;
    }
  }
  return true;
};



// test cases:
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])

const testArr = ['1', 'two', 'three', '4', 'five'];
assertArraysEqual(map(testArr, testChar => testChar[0]), ['1', 't', 't', '4', 'f']);