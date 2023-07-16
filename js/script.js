var cardCollection = [];
var backCardss = [];
var backCards = [];
var sec = 00,
  min = 00,
  hrs = 0,
  score = 0,
  timer,
  intervalId,
  intervalValue;
var gameTime = document.getElementById("gametime");
var timeOut = document.getElementById("timeout");
var card = document.querySelectorAll(".card");
var startBtn = document.getElementById("start_btn");
var pauseBtn = document.getElementById("pause_btn");
var resumeBtn = document.getElementById("resume_btn");
var backcardss = document.querySelectorAll(".back_card");
backcards = Array.from(backcardss);

function hide() {
  var arrNew = Array.from(backcardss);
  for (var i = 0; i < arrNew.length; i++) {
    arrNew[i].style.display = "none";
    if (i === arrNew.length - 1) {
      setTimeout(show, 1000);
    }
  }
  startBtn.disabled = true;

  backcards.map(function (element) {
    element.addEventListener("click", function () {
      backCards.push(element);
      element.style.visibility = "hidden";
      var facecards = this.previousElementSibling;
      cardCollection.push(facecards);
      if (cardCollection.length == 2) {
        if (cardCollection[0].src == cardCollection[1].src) {
          score++;
          if (score === 6) {
            onTimeOut();
          }
          setTimeout(function () {
            cardCollection[0].style.visibility = "hidden";
            cardCollection[1].style.visibility = "hidden";
            cardCollection = [];
            backCards = [];
          }, 1000);
        } else {
          setTimeout(function () {
            backCards[0].style.visibility = "visible";
            backCards[1].style.visibility = "visible";
            backCards = [];
            cardCollection = [];
          }, 800);
        }
      }
    });
  });
}

function onTimeOut() {
  clearInterval(intervalValue);
  var cards = Array.from(card);
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  timeOut.style.display = "block";
  timeOut.innerHTML = "congratulations";
}

function show() {
  var arrNew = Array.from(backcardss);
  for (var i = 0; i < arrNew.length; i++) {
    arrNew[i].style.display = "inline-block";
  }

  onStart();
}

function add() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
  timer =
    (hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") +
    ":" +
    (min ? (min > 9 ? min : "0" + min) : "00") +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  gameTime.innerHTML = "Time:" + timer;
}

function onStart() {
  intervalValue = setInterval(add, 1000);
}

pauseBtn.addEventListener("click", onpause);
function onpause() {
  var arrNew = Array.from(backcardss);
  for (var i = 0; i < arrNew.length; i++) {
    arrNew[i].style.pointerEvents = "none";
  }
  clearInterval(intervalValue);
}

resumeBtn.addEventListener("click", onresume);
function onresume() {
    var arrNew = Array.from(backcardss);
    for (var i = 0; i < arrNew.length; i++) {
      arrNew[i].style.pointerEvents = "unset";
    }
  onStart();
}
