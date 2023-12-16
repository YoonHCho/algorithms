// Link: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

const test = (h, word) => {
  let tallest = Number.NEGATIVE_INFINITY;
  [...word].forEach(char => {
    // get the ascii number and subtract 97 since word will all be lowercase and 'a' ASCII is 97.
    const indexNumToFind = char.charCodeAt(0) - 97;
    const num = h[indexNumToFind];
    if (num > tallest) tallest = num;
  });

  return tallest * word.length;
};

console.log(test("13131413255555555555555555", "abc")); // 9
console.log(test("13131413255555555555555557", "zaba")); // 28
