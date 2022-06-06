class Game {
  constructor(board) {
    this.board = board;
    this.totalScore = 0;
  }

  play(totalRounds) {
    while (totalRounds > 0) {
      const newScore = 5;

      this.totalScore += newScore;
      totalRounds--;
    }
    return this.totalScore;
  }
}

const main = () => {
  const game = new Game();
  const totalRounds = 2;

  game.play(totalRounds);
};

exports.Game = Game;
