let cubo = document.getElementById("container");
const audio = document.getElementById("beep");
function azul() {
  cubo.style.background = "blue";
}
function verde() {
  cubo.style.background = "green";
}
function vermelho() {
  cubo.style.background = "red";
}
function sair() {
  cubo.style.background = "white";
}
function som() {
  audio.currentTime = 0;
  audio.play();
}
