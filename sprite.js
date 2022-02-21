export default class Sprite {
  constructor() {
    this.div = document.createElement("div");
    this.element = document.body.appendChild(this.div);
    this.sprites = [];

    this.size = 10 + Math.random() * 40;
    this.centerX = window.innerWidth / 2 - this.size / 2;
    this.centerY = window.innerHeight / 2 - this.size / 2;
    this.x = this.centerX;
    this.y = this.centerY;
    this.dx = this._randDirection;
    this.dy = this._randDirection;
    this.vx = 0.3 + Math.random() * 3;
    this.vy = 0.3 + Math.random() * 3;
    this.color = "#" + Math.random().toString(16).slice(2, 8);
    this.opacity = 0.3 + Math.random() * 0.7;
  }

  get _hitBackgroundColor() {
    return (this.element.style.background = `red`);
  }

  get _randDirection() {
    const directions = [-1, 1];
    const rand = Math.floor(Math.random() * directions.length);
    return directions[rand];
  }

  newSprite = (sprite) => this.sprites.push(sprite);

  boundCollision = () => {
    if (this.x <= 0 || this.x + this.size >= window.innerWidth) {
      this.dx *= -1;
      this._hitBackgroundColor;
    }

    if (this.y <= 0 || this.y + this.size >= window.innerHeight) {
      this.dy *= -1;
      this._hitBackgroundColor;
    }
  };

  render = () => {
    const ball = this.element;

    ball.style.position = `absolute`;
    ball.style.width = `${this.size}px`;
    ball.style.height = `${this.size}px`;
    ball.style.transform = `translate(${this.x}px, ${this.y}px)`;
    ball.style.backgroundColor = this.color;
    ball.style.display = "block";
    ball.style.borderRadius = "100%";
    ball.style.opacity = this.opacity;
  };

  update = () => {
    this.x += this.vx * this.dx;
    this.y += this.vy * this.dy;
    this.boundCollision();
  };
}
