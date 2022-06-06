const assert = require('assert');
const { Game, Board } = require('../src/dartGame.js');

describe('Board', () => {
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
