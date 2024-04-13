const arrowDown = document.querySelectorAll(".fa-arrow-down");

console.log(arrowDown);

function Conteudo(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none") document.getElementById(el).style.display = "block";
  else document.getElementById(el).style.display = "none";
}
