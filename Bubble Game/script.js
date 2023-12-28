const bottom = document.querySelector(".pbtm");
const hitElement=document.querySelector(".hit");
const timerElement=document.querySelector(".time");
const scoreElement=document.querySelector(".score");
function createBubble() {
  // var clutter = "";
  // for (var i = 1; i < 162; i++) {
  //   var rn = Math.floor(Math.random() * 10);
  //   clutter += `
  //       <div class="bubble">${rn}</div>`;
  // }
  // bottom.innerHTML = clutter;
  const bubbleValues=Array.from({length:161},()=> Math.floor(Math.random()*10)+1)
  bottom.innerHTML=bubbleValues.map(value=>`<div class="bubble">${value}</div>`).join('');
}

var timer = 60;
var pause = false;
var interval;
function createTimer() {
  interval = setInterval(function () {
    if (timer > 0 && !pause) {
      timer--;
      timerElement.textContent = timer;
    } else {
      clearInterval(interval);
      hitElement.textContent = "-";
      bottom.innerHTML += `<button class="btn resume" role="button">Resume</button>`;
    }
  }, 1000);
}

var hit;
function hitNumber() {
  hit = Math.floor(Math.random() * 10);
  hitElement.textContent = hit;
}

var score = 0;
function scorecard() {
  score += 1;
  scoreElement.textContent = score;
}

var mouseDown=false

bottom.addEventListener("mousedown", function (event) {
  const clickedBubble = event.target;
  if (clickedBubble.classList.contains("bubble") && !pause) {
    mouseDown = true; // Set the flag when the mouse is held down
    var bubbleValue = clickedBubble.textContent;
    // Check if the clicked bubble's value is equal to the hit number
    if (hit == bubbleValue) {
      scorecard(); // Call scorecard function when values match
      hitNumber();
      createBubble();
    } else {
      clickedBubble.classList = "red";
    }
  }
});

bottom.addEventListener("mouseup", function () {
  mouseDown = false; // Reset the flag when the mouse is released
});
// additional Feature
bottom.innerHTML = `<button class="btn start" role="button">Start Game</button>`;

document.querySelector(".start").addEventListener("click", function (e) {
  e.stopPropagation();
  hitNumber();
  createTimer();
  createBubble();
});

document.addEventListener("click", function (e) {
  let target = e.target;
  console.log(target);
  if (
    !bottom.contains(target) &&
    !target.classList.contains("resume") &&
    !pause
  ) {
    pause = true;
    bottom.innerHTML = `<h2>Game Paused</h2><button class="btn resume" role="button">Resume</button>`;
    clearInterval(interval);
  } else if (target.classList.contains("resume")) {
    pause = false;
    bottom.innerHTML = "";
    createBubble();
    createTimer();
    hitNumber();
  }
});
