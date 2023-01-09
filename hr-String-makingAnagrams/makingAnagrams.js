function makeAnagram(a, b) {
  let aCount = a;
  let bCount = b;

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      bCount = bCount.replace(a[i], "");
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) {
      aCount = aCount.replace(b[i], "");
    }
  }

  return aCount.length + bCount.length;
}
