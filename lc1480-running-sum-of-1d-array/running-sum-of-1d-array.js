/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((num, i, arr) => {
        // num = current element, i = index, arr = current passed arr, but updated to the returned element in the array
        if (i === 0) return arr[i];
        return arr[i] = num + arr[i - 1];
    });
};