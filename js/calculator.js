var n1 = document.querySelector("#n1");
var resultado = document.querySelector("h2");
resultado.innerHTML = 0;

function give() {
  resultado.innerHTML = Math.round((n1.value * 7) / 10);
}
function recive() {
  resultado.innerHTML = Math.round((n1.value * 10) / 7);
}