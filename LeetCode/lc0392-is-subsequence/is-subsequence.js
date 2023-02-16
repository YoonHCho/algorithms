var isSubsequence = function (s, t) {
  // more runtime (62 ms) and memory (41.9 MB), but shorter code
  if (s.length > t.length) return false;
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[index] === t[i]) {
      index++;
    }
  }

  return index === s.length;

  // less runtime (57 ms) and memory (41.8 MB), but longer code
  // if (s.length === 0) {
  //   return true;
  // } else if (t.indexOf(s[0], 0) === -1 || s.length > t.length) {
  //   return false;
  // } else {
  //   let index = t.indexOf(s[0], 0) + 1;
  //   for (let i = 1; i < s.length; i++) {
  //     if (t.includes(s[i], index)) {
  //       index = t.indexOf(s[i], index) + 1;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  // return true;
};
