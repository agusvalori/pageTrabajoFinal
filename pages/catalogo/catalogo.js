import { articulosCatalogo } from "../../js/articulosCatalogo.js";
import { sliderNovedades } from "../../js/sliderNovedades.js";
sliderNovedades();

window.addEventListener("load", function () {
  var articulo = articulosCatalogo;

  articulo.forEach((article) => crearTarget(article));
});

const crearTarget = (article) => {
  //############## TARGET HEADER ###################
  const target = document.createElement("div");
  target.className = "target";

  const targetHeader = document.createElement("div");
  targetHeader.className = "targetHeader";

  const targetImg = document.createElement("img");
  targetImg.className = "targetImg";
  targetImg.src = article.src;

  targetHeader.appendChild(targetImg);

  //############## TARGET BODY ###################

  const targetBody = document.createElement("div");
  targetBody.className = "targetBody";

  const targetTitle = document.createElement("div");
  targetTitle.className = "targetTitle";

  const targetTitleText = document.createElement("h1");
  targetTitleText.className = "targetTitleText";
  const titleText = document.createTextNode(article.title);
  targetTitleText.appendChild(titleText);
  targetTitle.appendChild(targetTitleText);

  const targetDescription = document.createElement("div");
  targetDescription.className = "targetDescription";

  const targetDescriptionText = document.createElement("p");
  targetDescriptionText.className = "targetDescriptionText";
  const descriptionText = document.createTextNode(article.description);
  targetDescriptionText.appendChild(descriptionText);
  targetDescription.appendChild(targetDescriptionText);

  targetBody.appendChild(targetTitle);
  targetBody.appendChild(targetDescription);

  //############## TARGET ###################
  const catalogo = document.getElementById("catalogo");
  target.appendChild(targetHeader);
  target.appendChild(targetBody);
  catalogo.appendChild(target);
};
