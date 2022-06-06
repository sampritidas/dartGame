const scoreChart = {
  '0': 100,
  '1': 80, '2': 80,
  '3': 60, '4': 60,
  '5': 40, '6': 40,
  '7': 20, '8': 20,
  '9': 10, '10': 10,
  '11 - rest': 0,
};

// const randomInt = () => Math.floor(Math.random() * 12);

const getNewPoint = () => {
  const x = 5;
  const y = 6;
  return { x, y };
};

class Board {
  constructor() {
    this.center = { x: 10, y: 10 };
    this.radius = 10;
  }

  distanceFromCenter(newPoint) {
    const dx = newPoint.x - this.center.x;
    const dy = newPoint.y - this.center.y;
    return Math.round(Math.hypot(dx, dy));
  }

  scoreBasedOnDistance(distance) {
    return scoreChart[distance];
  }

  getScore(newPoint) {
    const distance = this.distanceFromCenter(newPoint);
    return this.scoreBasedOnDistance(distance);
  }
}

class Game {
  constructor(board) {
    this.board = board;
    this.totalScore = 0;
  }

  play(totalRounds) {
    while (totalRounds > 0) {
      console.log('chance left', totalRounds);
      const newPoint = getNewPoint();
      const newScore = this.board.getScore(newPoint);

      this.totalScore += newScore;
      totalRounds--;
    }
    return this.totalScore;
  }
}

const main = () => {
  const board = new Board();
  const game = new Game(board);
  const totalRounds = 2;

  return game.play(totalRounds);
};

exports.main = main;
exports.Board = Board;
