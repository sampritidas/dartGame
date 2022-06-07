const randomInt = () => Math.floor(Math.random() * 10);

const showStatus = (currentScore) => {
  console.log('🎯 --> ', currentScore);
};

const showTotalScore = (totalScore) => {
  console.log('Current Score : ', totalScore);
};

showFinalScore = (finalScore) => {
  console.log('Final Score : ', finalScore)
};

const getNewPoint = () => {
  const x = randomInt();
  const y = randomInt();
  return { x, y };
};

class Game {
  constructor(board) {
    this.board = board;
    this.totalScore = 0;
  }

  play(totalRounds) {
    while (totalRounds > 0) {
      const newPoint = getNewPoint();
      const newScore = this.board.getScore(newPoint);

      showStatus(newScore);

      this.totalScore += newScore;

      showTotalScore(this.totalScore);
      totalRounds--;
    }
    showFinalScore(this.totalScore);
  }
}

exports.Game = Game;
