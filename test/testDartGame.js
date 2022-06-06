const assert = require('assert');
const { Game } = require('../src/dartGame.js');

describe('Game', () => {
  const game = new Game();
  const actual = game.play(2);
  it('Should give 10 as totalScore', () => {
    assert.equal(actual, 10);
  });
});
