var strStr = function (haystack, needle) {
  const index = haystack.indexOf(needle);
  return index;
};

// Test cases
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
