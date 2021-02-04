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


const takeUntil = function(array, callback) {
  let arrayUntil = "";
  array.forEach((item, index) => {
    if (callback(item)) {
      arrayUntil = array.splice(0, index);
    }
  });
  return arrayUntil;
}


// // alternate version:
// const takeUntil = function(array, callback) {
//   const outputArray = [];
//   array.forEach((item, index) => {
//     if (callback(item)) {
//       outputArray.push(array.slice(0, index));
//     }
//   });
//   return outputArray[0];
// }




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);


const data2 = [90, 94, 96]
const results2 = takeUntil(data2, x => x > 95);
assertArraysEqual(takeUntil(data2, x => x > 95), [90, 94])