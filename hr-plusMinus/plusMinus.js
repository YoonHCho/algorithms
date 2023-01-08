function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  for (let ele of arr) {
    if (ele > 0) positive++;
    if (ele < 0) negative++;
    if (ele === 0) zeros++;
  }
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}
