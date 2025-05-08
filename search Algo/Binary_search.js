
// Binary Search Algorithm
// This function performs a binary search on a sorted array to find the index of a target value.
// If the target value is found, it returns the index; otherwise, it returns -1.
// Binary search is more efficient than linear search for large datasets, as it reduces the search space by half with each iteration.
// It requires the array to be sorted beforehand.
// The time complexity of binary search is O(log n), while linear search has a time complexity of O(n).


function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;         // found
      } else if (arr[mid] < target) {
        low = mid + 1;      // search right half
      } else {
        high = mid - 1;     // search left half
      }
    }
    return -1;              // not found
  }
  
  // Example (sorted array required):
  console.log(binarySearch([10, 20, 30, 40, 50], 30)); // 2
  console.log(binarySearch([10, 20, 30, 40, 50], 25)); // -1
  