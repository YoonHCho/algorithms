var longestCommonPrefix = function (strs) {
  // 2ND CODE - more efficient code than the one originally wrote.
  // runtime 55ms (87.94% efficiency) memory 41.9mb (90.56% efficiency)
  strs.sort(); // sort the array in order - this modifies the array

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];

  // // runtime 73ms (only 15.85% Efficiency) memory 45.4mb (only 5.9% Efficiency)
  // let lowest = Number.POSITIVE_INFINITY;
  // let wordToCompare;
  // for (let word of strs) {
  //   if (word.length < lowest) {
  //     lowest = word.length;
  //     wordToCompare = word;
  //   }
  // }

  // let common = true;
  // let index = 0;
  // let commonLetters = "";
  // while (common) {
  //   for (let j = 0; j < strs.length; j++) {
  //     if (!strs[j].startsWith(commonLetters + wordToCompare[index])) {
  //       common = false;
  //     }
  //   }
  //   if (common) {
  //     commonLetters += wordToCompare[index];
  //     index++;
  //   }
  //   if (index === wordToCompare.length) {
  //     common = false;
  //   }
  // }
  // return commonLetters;
};
