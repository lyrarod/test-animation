document.addEventListener("DOMContentLoaded", (e) => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const CANVAS_WIDTH = (canvas.width = 600);
  const CANVAS_HEIGHT = (canvas.height = 400);

  class Player {
    constructor(w, h, color) {
      this.x = 0;
      this.w = w;
      this.h = h;
      this.y = CANVAS_HEIGHT / 2 - this.h / 2;
      this.color = color;
      // this.vX = 1 + Math.random() * 2;
      this.vX = 1;

      console.log(this.vX);
    }

    render = () => {
      ctx.fillStyle = this.color ?? "red";
      ctx.fillRect(this.x, this.y, this.w, this.h);
    };

    update = (delta) => {
      this.x += this.vX + delta * 0.1;
      if (this.x > CANVAS_WIDTH) this.x = -this.w;
      this.clear();
    };

    clear = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };
  }

  const player1 = new Player(30, 80, "green");

  let animate, lastTime;

  (animate = (time) => {
    if (lastTime != null) {
      const delta = time - lastTime;
      player1.update(delta);
    }
    player1.render();

    lastTime = time;
    requestAnimationFrame(animate);
  })();
});
