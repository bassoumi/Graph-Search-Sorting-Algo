// Merge Sort Algorithm
// This function sorts an array using the Merge Sort algorithm, which is a divide-and-conquer algorithm.
// It divides the array into two halves, sorts each half recursively, and then merges the sorted halves back together.
// Merge Sort is stable and has a time complexity of O(n log n) in all cases (best, average, and worst).
// The space complexity is O(n) due to the temporary arrays used for merging.
// Merge Sort is particularly efficient for large datasets and is often used in external sorting algorithms where data is too large to fit into memory.
// It is also a stable sort, meaning that it preserves the relative order of equal elements in the sorted output.




function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return result.concat(left, right);
  }
  
  // Example:
  console.log(mergeSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
  