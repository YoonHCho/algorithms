function lonelyinteger(a) {
  let dup = [];
  for (let i = 0; i < a.length; i++) {
    if (a.slice(i + 1).includes(a[i])) {
      dup.push(a[i]);
    }
    if (!a.slice(i + 1).includes(a[i]) && !dup.includes(a[i])) {
      return a[i];
    }
  }
}
