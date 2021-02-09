const tail = require('../tail');
const assertEqual = require('../assertEqual');

let words = ["Yo Yo", "Lighthouse", "Labs"];
const tailedWords = tail(words);

assertEqual(tailedWords[0], "Lighthouse");
assertEqual(tailedWords.length, 2);
assertEqual(words[0], "Yo Yo");