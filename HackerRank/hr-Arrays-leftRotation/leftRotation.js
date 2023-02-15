function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    const temp = a.shift();
    a.push(temp);
  }

  return a;
}
