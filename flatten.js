const flatten = function(array) {
  let flattenedArray = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flattenedArray.push(element[i]);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  console.log(flattenedArray);
};