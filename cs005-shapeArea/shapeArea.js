function solution(n) {
  if (n === 1) {
    return 1;
  }

  return solution(n - 1) + n * 2 + (n - 2) * 2;

  // n * n + (n-1)*(n-1);
}