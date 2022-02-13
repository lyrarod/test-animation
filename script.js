import Sprite from "./sprite.js";

let loop;
let balls = [];

for (let i = 0; i < 100; i++) {
  balls.push(new Sprite());
}
console.log(balls);

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("loaded...");

  loop = () => {
    balls.forEach((ball) => ball.render());
    balls.forEach((ball) => ball.update());
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
});
