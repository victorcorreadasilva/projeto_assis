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
  document.querySelectorAll("h3.h3Img").forEach(function (h3) {
    console.log(h3);
    h3.addEventListener("click", function () {
      var el = h3.getAttribute("data-conteudo");
      var contentElement = document.getElementById(el);
      if (
        contentElement.style.display === "none" ||
        contentElement.style.display === ""
      ) {
        contentElement.style.display = "block";
      } else {
        contentElement.style.display = "none";
      }
    });
  });
}

toggleArrowClass();
