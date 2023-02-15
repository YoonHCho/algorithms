var pivotIndex = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let leftTotal = 0;
  for (let j = 0; j < nums.length; j++) {
    if (leftTotal === total - nums[j] - leftTotal) {
      return j;
    }
    leftTotal += nums[j];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
