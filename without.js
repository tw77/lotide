const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    newArray.push(source[i]);
  }

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  
  return newArray;
};


// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));


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


// assertArraysEqual([2, 3], (without([1, 2, 3], [1])));
// assertArraysEqual(["1", "2"], (without(["1", "2", "3"], [1, 2, "3"])));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);