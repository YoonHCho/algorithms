function repeatedString(s, n) {
  let countA = 0;

  if (s.length === 1 && s[0] === "a") {
    return s.length * n;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      countA++;
    }
  }

  const wholeNum = Math.floor(n / s.length);
  countA *= wholeNum;

  for (let j = 0; j < n % s.length; j++) {
    if (s[j] === "a") {
      countA++;
    }
  }

  return countA;
}
