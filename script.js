const secondsHand = document.getElementById("seconds");
const minutesHand = document.getElementById("minutes");
const hoursHand = document.getElementById("hours");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12; // % 12 for converting into 12 hour format.
  const timeInterval = 6;

  secondsHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)"
  minutesHand.style.transform =  "rotate(" + (minutes * timeInterval + seconds/10) + "deg)"
  hoursHand.style.transform = "rotate(" + (hours * 30 + minutes/2) + "deg)"
}

setInterval(getTime, 100); // for refreshing every 100 millisecond.