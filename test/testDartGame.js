const assert = require('assert');
const { Game, Board } = require('../src/dartGame.js');

describe('Board.distanceFromCenter', () => {
  it('Should give the distance from center (10,10)', () => {
    const board = new Board();
    const point = { x: 3, y: 5 }
    const actual = board.distanceFromCenter(point);
    assert.strictEqual(actual, 9);
  });

  it('Should give the distance from center when point (4,9)', () => {
    const board = new Board();
    const point = { x: 4, y: 9 }
    const actual = board.distanceFromCenter(point);
    assert.strictEqual(actual, 6);
  });
});

describe('Board.scoreBasedOnDistance', () => {
  it('should fetch score from scoreChart based on key', () => {
    const board = new Board();
    const point = { x: 4, y: 9 };
    const actual = board.getScore(point);
    assert.strictEqual(actual, 40);
  });
});

describe('Board.getScore', () => {
  it('should give the score if distance 3', () => {
    const board = new Board();
    const actual = board.scoreBasedOnDistance(3);
    assert.strictEqual(actual, 60);
  });

  it('should give the score if distance 9', () => {
    const board = new Board();
    const actual = board.scoreBasedOnDistance(10);
    assert.strictEqual(actual, 10);
  });
});
