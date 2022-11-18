m = 0;
var y;
//start
function start() {
  y = setInterval(run, 100);

  function run() {
    if (m == 1255) {
      clearInterval(y);
      m = 0;
    } else {
      m += 5;
      x = document.getElementById("img");
      x.style.marginLeft = m + "px";
    }
  }
}
//reverse
function Reverse() {
  y = setInterval(run, 100);
  function run() {
    if (m == 0) {
      clearInterval(y);
      m = 0;
    } else {
      m -= 5;
      a = document.getElementById("img");
      a.style.marginRight = m + "px";
    }
  }
}
//stop
function stop() {
  clearInterval(y);
}
//speed
function speed() {
  y = setInterval(run, 50);
  function run() {
    if (m == 1250) {
      clearInterval(y);
      m = 0;
    } else {
      m += 5;
      x = document.getElementById("img");
      x.style.marginLeft = m + "px";
    }
  }
}
