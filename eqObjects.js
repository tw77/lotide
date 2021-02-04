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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false);


