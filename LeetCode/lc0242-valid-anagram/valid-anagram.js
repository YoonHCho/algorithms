const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let record = {};
  // keep records of the string s
  for (let ltr of s) {
    if (record[ltr]) {
      record[ltr]++;
    } else {
      record[ltr] = 1;
    }
  }

  // check the t against the records kept for s
  for (let ltr of t) {
    if (record[ltr] == 0 || !record[ltr]) return false;
    else {
      record[ltr]--;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("hi", "hello")); // false
