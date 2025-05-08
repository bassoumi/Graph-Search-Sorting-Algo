
// Quick Sort Algorithm in JavaScript
// This function sorts an array using the Quick Sort algorithm, which is a divide-and-conquer algorithm.
// It selects a 'pivot' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
// The sub-arrays are then sorted recursively. Quick Sort is efficient for large datasets and has an average time complexity of O(n log n).
// The worst-case time complexity is O(n^2), but this is rare with good pivot selection strategies.
// The space complexity is O(log n) due to the recursive stack space used by the algorithm.



function quickSort(arr) {
    if (arr.length < 2) return arr;
    const pivot = arr[0];
    const less = arr.slice(1).filter(x => x <= pivot);
    const greater = arr.slice(1).filter(x => x > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
  
  // Example:
  console.log(quickSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
  