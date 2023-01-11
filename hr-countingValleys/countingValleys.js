function countingValleys(steps, path) {
  let countStep = 0;
  let intoValley = 0;

  for (let step of path) {
    if (step === "U") {
      countStep++;
    } else {
      if (countStep === 0) {
        countStep--;
        intoValley++;
      } else {
        countStep--;
      }
    }
  }

  return intoValley;
}
