const moveZeroes = nums => {
	if (nums.length < 2) return nums;
	let lPointer = 0;

	for (let rPointer = 0; rPointer < nums.length; rPointer++) {
		if (nums[rPointer] !== 0) {
			nums[lPointer] = nums[rPointer];

			// like switching values, since we updated the lPointer value in line 7, need to keep the rPointer value to 0 since lPointer will have a zero value
			if (lPointer !== rPointer) {
				nums[rPointer] = 0;
			}
			lPointer++;
		}
	}
	return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([2, 5, 0, 0, 14, 7])); // [2, 5, 14, 7, 0, 0]
console.log(moveZeroes([2, 0, 0, 14, 7])); // [2, 14, 7, 0, 0]

/*
lPointer: Will point to value zero and tracks the position where the next non-zero number should be placed.
rPointer: Iterates through the array to find non-zero numbers.
when l & r pointer is at same index # and the value isn't non-zero value, both need to move to next number.
*/
