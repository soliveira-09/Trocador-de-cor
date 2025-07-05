let cubo = document.getElementById("container");
const audio = document.getElementById("beep");

// Funções para fazer o cubo trocar de cor
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

// Função para tocar o bip quando o tyler for clicado
function som() {
  audio.currentTime = 0;
  audio.play();
}
