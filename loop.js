import Sprite from "./sprite.js";

let balls = [];

export const start = () => {
  init();
  loop();
};

const loop = () => {
  render();
  update();
  requestAnimationFrame(loop);
};

const init = () => {
  console.log("init...");
  let numBalls = 100;

  for (let i = 0; i < numBalls; i++) {
    balls.push(new Sprite());
  }
  console.log(balls);
};

const update = () => {
  // console.log("update...");
  balls.map((ball) => ball.update());
};

const render = () => {
  // console.log("render...");
  balls.map((ball) => ball.render());
};
