function solution(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], "*");
  }

  const countOnlyAsterisk = s2.replace(/[^*]/g, "");

  return countOnlyAsterisk.length;
}

console.log(solution("aabcc", "adcaa"));
console.log(solution("abca", "xyzbac"));
