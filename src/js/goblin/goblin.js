export default class Goblin {
  constructor(wrapClass, itemClass) {
    this.wrap = document.querySelector(wrapClass);
    this.items = this.wrap.querySelectorAll(itemClass);
    this.positions = [];
    this.randomPosition = undefined;
  }

  addPositions() {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].setAttribute('position', i);
      this.positions.push(i);
    }
  }

  getRandomPosition() {
    const goblin = document.querySelector('.goblin');
    this.randomPosition = Math.floor(
      Math.random() * (this.positions[this.positions.length - 1] - this.positions[0] + 1),
    );
    if (goblin && Number(this.randomPosition) === Number(goblin.getAttribute('position'))) {
      this.getRandomPosition();
    }
    return this.randomPosition;
  }

  addGoblin() {
    let targetPos = this.getRandomPosition();
    this.items.forEach((item) => item.classList.remove('goblin'));
    this.items.forEach((item) => {
      if (Number(item.getAttribute('position')) === Number(this.randomPosition)) {
        targetPos = item.getAttribute('position');
      }
    });
    if (this.items[Number(targetPos)]) {
      this.items[Number(targetPos)].classList.add('goblin');
    }
  }
}
