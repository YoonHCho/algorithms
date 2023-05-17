const solution = array => {
  let longest = Number.NEGATIVE_INFINITY;
  const longestArr = [];
  for (let ele of array) {
    if (ele.length > longest) {
      longest = ele.length;
      longestArr.length = 0;
    }
    if (ele.length === longest) {
      longestArr.push(ele);
    }
  }
  return longestArr;
};
