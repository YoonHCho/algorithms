var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false;
    }
  }
  return true;

  // let sMap = {}, tMap = {};

  // for (let i = 0; i < s.length; i++) {
  //   if (!sMap[s[i]] && !tMap[t[i]]) {
  //     sMap[s[i]] = t[i];
  //     tMap[t[i]] = s[i];
  //   } else if (sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) {
  //     return false;
  //   }
  // }
  // return true;
};
