// Link: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
  // remove duplicated scores from ranked array
  const rankingNoDups = Array.from(new Set(ranked));
  const playerRanking = [];

  // to start from end (lowest score) since player score is already from low score to high score
  let index = rankingNoDups.length - 1; // 4
  player.forEach(score => {
    // if the score is greater than ranking score, compare score with next better ranking score while decrementing i, while loop will not trigger once the highest score in the ranking is compared with player score.
    while (index >= 0 && score >= rankingNoDups[index]) {
      index--;
    }
    // add 2 (1+ for 0 index based and 1+ to even out the rankingNoDups.length - 1 from line 10)
    playerRanking.push(index + 2);
  });

  return playerRanking;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])); // [6, 4, 2, 1]
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])); // [6, 5, 4, 2, 1]
