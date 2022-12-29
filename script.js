/*------------------
    DOM ELEMENTS
-------------------*/
const daysElm = document.querySelector("#days");
const hoursElm = document.querySelector("#hours");
const minutesElm = document.querySelector("#minutes");
const secondsElm = document.querySelector("#seconds");
const panelElm = document.querySelector(".panel");
const counter1 = document.querySelector("#days");
const counter2 = document.querySelector("#counter2");
const counter3 = document.querySelector("#counter3");
const counter4 = document.querySelector("#counter4");

// daysElm.innerHTML = 25;

// data di natale
const endDate = new Date("January 1 2022");
const endDateInMs = endDate.getTime();

// tabella in ms
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

const counterTimer = setInterval(timer, 1000);

function timer() {
  // oggi in ms
  const nowInMs = new Date().getTime();

  const diff = endDateInMs - nowInMs;

  if (diff > 0) {
    daysElm.innerHTML = Math.floor(diff / dayInMs);
    hoursElm.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
    minutesElm.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
    secondsElm.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
  } else {
    clearInterval(timer);
    panelElm.innerHTML = "<h1>Happy New Year 🥂!</h1>";
  }
  return `<img
      class="light fireworks_1"
        src="5a372d2e35fec6.6334934015135654862212.png"
        alt="fireworks 1"
      />
      <img
        class="light fireworks_2"
        src="5a22c408da7335.8807451515122278488948.png"
        alt="fireworks 2"
      />
      <img
        class="firework fireworks_3"
        src="5a1b9e19ec80e9.2484464515117593859687.png"
        alt="fireworks 3"
      />
      <img
        class="light fireworks_4"
        src="kisspng-white-snowflake-black-lace-pattern-fireworks-5a9df04fca7628.6723813815203001118293.png"
        alt="fireworks 4"
      />
      <img
        class="light fireworks_5"
        src="kisspng-english-art-pattern-white-fireworks-material-5a702fdc503498.9214429715173017243285.png"
        alt="firework 5"
      />
      <img
        class="light fireworks_6"
        src="kisspng-white-snowflake-black-lace-pattern-fireworks-5a9df04fca7628.6723813815203001118293.png"
        alt="fireworks 6"
        />`;
}

if (h1 == `Happy New Year 🥂!`) {
  counter1.innerHTML = "<div>2</div>";
  counter2.innerHTML = "<div>0</div>";
  counter3.innerHTML = "<div>2</div>";
  counter4.innerHTML = "<div>3</div>";
}
