import Goblin from './goblin/goblin.js';

window.addEventListener('DOMContentLoaded', () => {
  const goblin = new Goblin('.game_wrap', '.hole');
  goblin.addPositions();
  setInterval(() => {
    goblin.getRandomPosition();
    goblin.addGoblin();
  }, 1000);
});
