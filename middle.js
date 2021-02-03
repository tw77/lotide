const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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



// ACTUAL FUNCTION
const middle = function(array) {
  let outputArray = [];
  let middleIndex = 0;

  if (array.length === 1 || array.length === 2) {
    return outputArray;
  }

  if (array.length % 2 === 0) {
    middleIndex = Math.floor((array.length - 1) / 2)
    outputArray.push(array[middleIndex])
    outputArray.push(array[middleIndex + 1])
  } else {
    middleIndex = Math.floor(array.length / 2);
    outputArray.push(array[middleIndex])
  } 

  return outputArray;
}

// TEST CODE
assertArraysEqual((middle([1, 2, 5, 6, 7, 6, 3])), [6]);
assertArraysEqual((middle([1, 2, 5, 7, 6, 3])), [5, 7]);