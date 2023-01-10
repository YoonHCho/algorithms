function sockMerchant(n, ar) {
  let pairCount = 0;
  // for (let i = 0; i < ar.length; i++) {
  //     if (ar.includes(ar[i], i + 1) && ar[i]) {
  //         const indexToRemove = ar.indexOf(ar[i], i + 1);
  //         delete ar[indexToRemove];
  //         pairCount++;
  //     }
  // }

  // below function will be better since # of iterations will decrease as long as a pair is found
  for (let i = 0; i < ar.length; i++) {
    if (ar.includes(ar[i], i + 1)) {
      const removeIndex = ar.indexOf(ar[i], i + 1);
      ar.splice(removeIndex, 1);
      ar.splice(i, 1);
      pairCount++;
      i--;
    }
  }

  return pairCount;
}
