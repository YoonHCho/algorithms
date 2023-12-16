// Link: https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  let billToCalculate = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      billToCalculate += bill[i];
    }
  }

  const annaPortion = billToCalculate / 2;

  if (annaPortion === b) {
    return console.log("Bon Appetit");
  }

  return console.log(b - annaPortion);
}

bonAppetit([3, 10, 2, 9], 1, 12); // 5
bonAppetit([3, 10, 2, 9], 1, 7); // Bon Appetit
bonAppetit([2, 4, 6], 2, 3); // Bon Appetit
