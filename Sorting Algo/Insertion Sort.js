

//insertion Sort Algorithm
// This function sorts an array using the Insertion Sort algorithm, which builds a sorted array one element at a time.
// It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
// The algorithm works by dividing the array into a sorted and an unsorted part. It iterates through the unsorted part and inserts each element into its correct position in the sorted part.
// The time complexity of Insertion Sort is O(n^2) in the average and worst cases, but it can be O(n) in the best case when the array is already sorted.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Example:
  console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
  