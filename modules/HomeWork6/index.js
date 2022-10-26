import { KEY_MAP, COLORS, SOUNDS } from "./constants.js";

const pads = document.querySelector(".pads");
const pad = document.querySelectorAll(".pad");
const visual = document.querySelector(".visual");

const playSound = (sounds, ind) => {
  var sound = sounds[ind];
  var audio = new Audio(sound);
  audio.load();
  audio.play();
};

const animatePad = (index) => {
  pad[index].style.animation = `dance 0.1s ease`;
  pad[index].addEventListener("animationend", function () {
    pad[index].style.animation = "none";
  });
};

const createBubble = (index) => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);

  const color = COLORS[index];
  bubble.style.backgroundColor = color;
  bubble.style.animation = `jump 1.5s ease`;

  bubble.addEventListener("animationend", () => {
    bubble.style.animation = "none";
  });
};

const play = (index) => {
  playSound(SOUNDS, index);
  animatePad(index);
  createBubble(index);
};

const switchKeyPlay = (key) => {
  switch (key) {
    case KEY_MAP.kick:
      play(0);
      break;
    case KEY_MAP.cymbal:
      play(1);
      break;
    case KEY_MAP.snare:
      play(2);
      break;
    case KEY_MAP.openHat:
      play(3);
      break;
    case KEY_MAP.longCrash:
      play(4);
      break;
    case KEY_MAP.hitHat:
      play(5);
      break;

    default:
      console.error("Error!!! Wrong a key");
      break;
  }
};
const keyPressHandler = ({ code }) => {
  switchKeyPlay(code);
};
const clickHandler = (event) => {
  switchKeyPlay("Key" + event.srcElement.innerText);
};

document.addEventListener("keypress", keyPressHandler);

pads.addEventListener("click", clickHandler);
