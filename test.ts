// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Solution

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = mergedArray.length;
  if (length % 2 === 0) {
    return (mergedArray[length / 2] + mergedArray[length / 2 - 1]) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
}

// Test

console.log(findMedianSortedArrays([1, 3], [2]));
