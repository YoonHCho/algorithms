var longestCommonPrefix = function (strs) {
  // runtime 73ms (only 15.85% Efficiency) memory 45.4mb (only 5.9% Efficiency)
  let lowest = Number.POSITIVE_INFINITY;
  let wordToCompare;
  for (let word of strs) {
    if (word.length < lowest) {
      lowest = word.length;
      wordToCompare = word;
    }
  }

  let common = true;
  let index = 0;
  let commonLetters = "";
  while (common) {
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(commonLetters + wordToCompare[index])) {
        common = false;
      }
    }
    if (common) {
      commonLetters += wordToCompare[index];
      index++;
    }
    if (index === wordToCompare.length) {
      common = false;
    }
  }
  return commonLetters;
};
