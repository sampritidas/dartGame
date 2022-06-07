const { Board } = require("./board");
const { Game } = require("./game");

const main = () => {
  const board = new Board();
  const game = new Game(board);
  const totalRounds = 10;

  game.play(totalRounds);
};

main();
