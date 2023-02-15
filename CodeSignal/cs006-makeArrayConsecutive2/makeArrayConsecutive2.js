function solution(statues) {
  let counter = 0;
  for (let i = Math.min(...statues) + 1; i < Math.max(...statues); i++ ) {
    if (!statues.includes(i)) {
      counter++;
    }
  }

  return counter;
}