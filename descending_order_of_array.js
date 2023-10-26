function Descending(arr) {
    var len = arr.length;
    var swapped;
  
    do {
      swapped = false;
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  function getInputArrayFromUser() {
    var input = prompt("Enter a comma-separated list of numbers: ");
    var inputArray = input.split(',').map(function (item) {
      return parseInt(item.trim(), 10);
    });
    return inputArray;
  }
  
  var unsortedArray = getInputArrayFromUser();
  var sortedArray = Descending(unsortedArray);
  console.log("Sorted Array in Descending Order: " + sortedArray);
  