const countLetters = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s+/g, '');

  for (const letter of sentence) {
    
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

const sentence = "hey which letters are here and how many times do they occur";

console.log(countLetters(sentence));
