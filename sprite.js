export default class Sprite {
  constructor() {
    this.div = document.createElement("div");
    this.element = document.body.appendChild(this.div);

    this.size = 10 + Math.random() * 30;
    this.centerX = window.innerWidth / 2 - this.size / 2;
    this.centerY = window.innerHeight / 2 - this.size / 2;
    this.x = this.centerX;
    this.y = this.centerY;
    this.dx = this.randDirection;
    this.dy = this.randDirection;
    this.vx = 0.3 + Math.random() * 3;
    this.vy = 0.3 + Math.random() * 3;
    this.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    this.opacity = 0.1 + Math.random() * 0.9;

    console.log(this.opacity);
  }

  get randDirection() {
    const directions = [-1, 1];
    const rand = Math.floor(Math.random() * directions.length);
    return directions[rand];
  }

  render = () => {
    const ball = this.element;

    ball.style.position = `absolute`;
    ball.style.width = `${this.size}px`;
    ball.style.height = `${this.size}px`;
    ball.style.left = `${this.x}px`;
    ball.style.top = `${this.y}px`;
    ball.style.background = this.color;
    ball.style.display = "block";
    ball.style.borderRadius = "100%";
    ball.style.opacity = this.opacity;
  };

  update = () => {
    if (this.x + this.size >= window.innerWidth) {
      this.dx *= -1;
      this.element.style.background = `crimson`;
    }
    if (this.x <= 0) {
      this.dx *= -1;
      this.element.style.background = `crimson`;
    }

    if (this.y + this.size >= window.innerHeight) {
      this.dy *= -1;
      this.element.style.background = `crimson`;
    }
    if (this.y < 0) {
      this.dy *= -1;
      this.element.style.background = `crimson`;
    }

    this.x += this.vx * this.dx;
    this.y += this.vy * this.dy;
  };
}
