var array = [1, 5, 8, 6, 7, 9, 9, 9];

function findLargestSum(array) {
    var largestSum = -Infinity;
    var length = array.length;
    var uniqueNums = Array.from(new Set(array));
    
    uniqueNums.sort((a, b) => b - a);
  
    for (var i = 0; i < length - 2; i++) {
      for (var j = i + 1; j < length - 1; j++) {
        for (var k = j + 1; k < length; k++) {
          var sum = uniqueNums[i] + uniqueNums[j] + uniqueNums[k];
          if (sum > largestSum) {
            largestSum = sum;
          }
        }
      }
    }
  
    return largestSum;
  }
  
  var result = findLargestSum(array);
  document.getElementById("large_int").innerText=result;
  