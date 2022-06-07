const assert = require('assert');
const { Board, scoreOnDistance } = require('../src/board');

describe('Board.distanceFromCenter', () => {
  it('Should give the distance which is inside range', () => {
    const board = new Board();
    const point = { x: 3, y: 5 }
    const actual = board.distanceFromCenter(point);
    assert.strictEqual(actual, 9);
  });

  it('Should give the distance which is out of range', () => {
    const board = new Board();
    const point = { x: 50, y: 40 }
    const actual = board.distanceFromCenter(point);
    assert.strictEqual(actual, 50);
  });
});

describe('Board.getScore', () => {
  it('should give the score when points (4,9)', () => {
    const board = new Board();
    const point = { x: 4, y: 9 };
    const actual = board.getScore(point);
    assert.strictEqual(actual, 40);
  });

  it('should give the score when points (5,9)', () => {
    const board = new Board();
    const point = { x: 5, y: 9 };
    const actual = board.getScore(point);
    assert.strictEqual(actual, 40);
  });
});

describe('scoreBasedOnDistance', () => {
  it('Should give score when distance 0', () => {
    assert.strictEqual(scoreOnDistance(0), 100);
  });

  it('Should give score when distance inside range', () => {
    assert.strictEqual(scoreOnDistance(5), 40);
  });

  it('Should give score when distance out of range', () => {
    assert.strictEqual(scoreOnDistance(11), 0);
  });
});