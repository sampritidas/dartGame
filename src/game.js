class Game {
  constructor(board) {
    this.board = board;
    this.totalScore = 0;
  }

  play(totalRounds, getPoints, log) {
    while (totalRounds > 0) {
      const score = this.board.getScore(getPoints());

      log('🎯 --> ', score);
      this.totalScore += score;

      log('Current Score : ', this.totalScore);
      totalRounds--;
    }
    log('Final Score : ', this.totalScore);
  }
}

exports.Game = Game;
