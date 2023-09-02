var removeElement = function (nums, val) {
  let count = 0;
  for (let i of nums) {
    if (i !== val) {
      nums[count++] = i;
    }
  }
  return count;
};

const nums = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(nums, val));
