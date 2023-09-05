var searchInsert = function (nums, target) {
  // O (log n)
  let low = 0,
    high = nums.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      low = mid + 1;
    } else if (target < nums[mid]) {
      high = mid;
    }
  }
  return low;

  // O(n)
  // const index = nums.indexOf(target);
  // if (index >= 0) return index;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] > target) {
  //     return i;
  //   }
  // }
  // return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
