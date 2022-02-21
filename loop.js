import Sprite from "./sprite.js";

let balls = new Sprite();
let isPaused = false;

export function start() {
  init();
  loop();
}

function createButtonPlayPause() {
  const btn = document.createElement("button");
  btn.textContent = "PAUSE";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    isPaused = !isPaused;
    isPaused ? (btn.textContent = "PLAY") : (btn.textContent = "PAUSE");
    console.log("PAUSED:", isPaused);
  });
}

function init() {
  console.log("init...");

  createButtonPlayPause();
  balls.createSprites(50);
}

function loop() {
  render();
  update();
  requestAnimationFrame(loop);
}

function render() {
  // console.log("render...");
  balls.sprites.map((b) => b.render());
}

function update() {
  // console.log("update...");
  if (isPaused) return;
  balls.sprites.map((b) => b.update());
}
