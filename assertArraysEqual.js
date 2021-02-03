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

// assertArraysEqual([1, 2], [1, 2]);
// assertArraysEqual([1, 2], [1, 3]);