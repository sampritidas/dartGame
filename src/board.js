const remainderOfTwo = (num) => num % 2;

const fetchScore = (num) => {
  const subtrehend = remainderOfTwo(num) + num;
  return ((10 - subtrehend) * 10);
};

const isDistanceOutOfRange = (distance) => distance > 10;

const scoreBasedOnDistance = (distance) => {
  if (isDistanceOutOfRange(distance)) {
    return 0;
  }
  return fetchScore(distance);
};

class Board {
  constructor() {
    this.center = { x: 10, y: 10 };
    this.radius = 10;
  }

  getScore(newPoint) {
    const distance = this.distanceFromCenter(newPoint);
    return scoreBasedOnDistance(distance);
  }

  distanceFromCenter(newPoint) {
    const dx = newPoint.x - this.center.x;
    const dy = newPoint.y - this.center.y;
    return Math.round(Math.hypot(dx, dy));
  }
}

exports.Board = Board;
exports.scoreOnDistance = scoreBasedOnDistance;
