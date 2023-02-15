/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let exist = target - nums[i];
    if(nums.includes(exist, i + 1)) {
      const secondIndex = nums.indexOf(exist, i + 1);
      return [i, secondIndex];
    }
  }
};