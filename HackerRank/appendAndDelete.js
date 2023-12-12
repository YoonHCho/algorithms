// Link: https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(s, t, k) {
  // first if k is greater than or equal to the combined length of s and t, it can convert in exactly k operations. when k is left while s is empty string, it can use up the k by deleting on s and it will still stay as empty string.
  if (s.length + t.length <= k) return "Yes";

  // get common letters of two strings
  let commonLetters = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonLetters++;
    } else {
      break;
    }
  }
  // get the operations needed
  // const deleteOperations = s.length - commonLetters;
  // const appendOperations = t.length - commonLetters;
  const opsNeeded = s.length - commonLetters + t.length - commonLetters;

  // need to check if operation needed is greater than k
  if (opsNeeded <= k) {
    // if operation needed is left, can we use up the operations (as a pair - append and delete) so we can convert s exactly in k operations
    if ((k - opsNeeded) % 2 === 0) return "Yes";
    else return "No";
  } else {
    return "No";
  }
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // Yes
console.log(appendAndDelete("aba", "aba", 7)); // Yes
console.log(appendAndDelete("ashley", "ash", 2)); // No
console.log(appendAndDelete("ash", "ashley", 2)); // No
console.log(appendAndDelete("ash", "ashley", 3)); // Yes
console.log(appendAndDelete("ash", "ashley", 4)); // Yes
console.log(appendAndDelete("ash", "ashley", 6)); // Yes
