const { Board } = require("./board");
const { Game } = require("./game");

const randomInt = () => Math.floor(Math.random() * 10);

const getNewPoint = (getPoint) => {
  const x = getPoint();
  const y = getPoint();
  return { x, y };
};

const main = () => {
  const board = new Board();
  const game = new Game(board);
  const totalRounds = 10;

  game.play(totalRounds, getNewPoint.bind(null, randomInt), console.log);
};

main();
exports.getNewPoint = getNewPoint;
