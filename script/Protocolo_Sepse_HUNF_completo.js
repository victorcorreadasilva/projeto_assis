let arrowSepseElements = [];

async function populateArrowElementsArray() {
  await new Promise(function (resolve) {
    document.addEventListener("DOMContentLoaded", function () {
      let elements = document.querySelectorAll(".fa-arrow-down, .fa-arrow-up");
      arrowSepseElements = Array.from(elements);
      resolve();
    });
  });
}

async function toggleArrowClass() {
  await populateArrowElementsArray();
  document.querySelectorAll("h3").forEach(function (h3) {
    h3.addEventListener("click", function () {
      let arrowDown = h3.querySelector(".fa-arrow-down");
      let arrowUp = h3.querySelector(".fa-arrow-up");

      if (arrowDown && arrowUp) {
        if (arrowDown.classList.contains("displayArrowNone")) {
          arrowDown.classList.remove("displayArrowNone");
          arrowUp.classList.add("displayArrowNone");
        } else {
          arrowDown.classList.add("displayArrowNone");
          arrowUp.classList.remove("displayArrowNone");
        }

        // Lógica para mostrar/ocultar o conteúdo
        var el = h3.dataset.conteudo;
        var contentElement = document.getElementById(el);
        contentElement.style.display =
          contentElement.style.display === "none" ? "block" : "none";
      }
    });
  });
}
