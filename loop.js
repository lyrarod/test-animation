import Sprite from "./sprite.js";

let balls = new Sprite();
let isPaused = false;

const btn = document.createElement("button");
btn.textContent = "PAUSE";
document.body.appendChild(btn);

btn.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  isPaused = !isPaused;
  isPaused ? (btn.textContent = "PLAY") : (btn.textContent = "PAUSE");

  console.log("PAUSED:", isPaused);
}

export const start = () => {
  init();
  loop();
};

const init = () => {
  console.log("init...");

  let numberOfBalls = 100;

  Array(numberOfBalls)
    .fill()
    .map(() => balls.newSprite(new Sprite()));

  console.log(balls.sprites);
};

const loop = () => {
  render();
  update();
  requestAnimationFrame(loop);
};

const render = () => {
  // console.log("render...");
  balls.sprites.map((b) => b.render());
};

const update = () => {
  // console.log("update...");
  if (!isPaused) {
    balls.sprites.map((b) => b.update());
  }
};
