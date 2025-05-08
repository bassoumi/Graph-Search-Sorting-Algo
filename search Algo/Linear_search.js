
// Linear Search Algorithm
// This function performs a linear search on an array to find the index of a target value.
// If the target value is found, it returns the index; otherwise, it returns -1.



function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;            // return index if found
      }
    }
    return -1;               // not found
  }
  
  // Example:
  console.log(linearSearch([10, 20, 30, 40], 30)); // 2
  console.log(linearSearch([10, 20, 30, 40], 50)); // -1
  