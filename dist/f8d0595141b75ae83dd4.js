import 'core-js/modules/web.timers.js'; import Goblin from './goblin/goblin.js';

window.addEventListener('DOMContentLoaded', (() => { const o = new Goblin('.game_wrap', '.hole'); o.addPositions(), setInterval((() => { o.getRandomPosition(), o.addGoblin(); }), 1e3); }));
