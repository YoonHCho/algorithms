function minimumBribes(q) {
  let totalBribes = 0;

  for (let currentPersonPosition = 0; currentPersonPosition < q.length; currentPersonPosition++) {
    // get the current person's original position and get the diff of original position with current
    const currPersonOriginalPosition = q[currentPersonPosition] - 1;
    const diff = currPersonOriginalPosition - currentPersonPosition;
    // if diff is more than 2, it means, current person bribed more than 2 people
    if (diff > 2) return console.log("Too chaotic");

    for (
      let checkTwoPeopleFrontOfCurrentPerson = Math.max(0, currPersonOriginalPosition - 1);
      checkTwoPeopleFrontOfCurrentPerson < currentPersonPosition;
      checkTwoPeopleFrontOfCurrentPerson++
    ) {
      const personFrontOriginalPosition = q[checkTwoPeopleFrontOfCurrentPerson] - 1;
      if (personFrontOriginalPosition > currPersonOriginalPosition) {
        totalBribes++;
      }
    }
  }

  return console.log(totalBribes);
}
