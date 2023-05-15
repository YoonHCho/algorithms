/**
Given a string S, return the "reversed" string where all character that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
input: "ab-cd"
output: "dc-ba"

Example 2:
input: "a-bC-dEf=ghlj!!"
output:  "j-lh-gfE=dCba!!"
 */

const test1: string = 'ab-cd';
const test2: string = 'a-bC-dEf=ghlj!!';

const reverseOnlyLetters = (str: string): string => {
  const strArr = str.split('');
  let left = 0; // to keep track of left of the array
  let right = str.length - 1; // to keep track of the right of the array

  while (left < right) {
    if (/[a-zA-Z]/.test(strArr[left]) && /[a-zA-Z]/.test(strArr[right])) {
      const temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      left++;
      right--;
    } else if (/[a-zA-Z]/.test(strArr[left])) {
      strArr[right] = strArr[right];
      right--;
    } else if (/[a-zA-Z]/.test(strArr[right])) {
      strArr[left] = strArr[left];
      left++;
    }
  }

  const reversedStr = strArr.join('');
  return reversedStr;
}

console.log(reverseOnlyLetters(test1))
console.log(reverseOnlyLetters(test2))