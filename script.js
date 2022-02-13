import Sprite from "./sprite.js";

let loop;
let balls = [];
let numBalls = 100;

for (let i = 0; i < numBalls; i++) {
  balls.push(new Sprite());
}
// console.log(balls);

document.addEventListener("DOMContentLoaded", () => {
  loop = () => {
    balls.forEach((ball) => {
      ball.render();
      ball.update();
    });
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
});
