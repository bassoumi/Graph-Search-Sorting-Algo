// 912. Sort an Array
// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and O(n) space complexity.
// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]



var sortArray = function(nums) {
    function quickSort(l, r) {
      if (l >= r) return;
      const pivot = nums[Math.floor((l + r) / 2)];
      let i = l, j = r;
      while (i <= j) {
        while (nums[i] < pivot) i++;
        while (nums[j] > pivot) j--;
        if (i <= j) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          i++;
          j--;
        }
      }
      if (l < j) quickSort(l, j);
      if (i < r) quickSort(i, r);
    }
    quickSort(0, nums.length - 1);
    return nums;
  };
  