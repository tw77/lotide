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

module.exports = middle;