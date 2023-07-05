
const SWITCH_COLOR_DELAY = 1000;
let intervalID = null;

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  bodyBackground: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', handleBtnStartSwitchColor);
refs.btnStop.addEventListener('click', handleBtnStopSwitchColor);
refs.btnStop.disabled = true;

function handleBtnStartSwitchColor() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  intervalID = setInterval(() => {
    refs.bodyBackground.style.backgroundColor = getRandomHexColor();
  }, SWITCH_COLOR_DELAY);
}

function handleBtnStopSwitchColor() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(intervalID);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}