// Endre bakgrunnen til div id="container" til #DDA0DD

function changeBackground(color) {
  document.getElementById("container").style.background = color;
}

window.addEventListener("load", function () {
  changeBackground("#DDA0DD");
});
