const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚀🚀🚀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.splice(1);
};

let words = ["Yo Yo", "Lighthouse", "Labs"];

const tailedWords = tail(words);

assertEqual(tailedWords[0], "Lighthouse");
assertEqual(tailedWords.length, 2);
assertEqual(words[0], "Yo Yo");