import { articulosCatalogo } from "./articulosCatalogo.js";

export const catalogoShowArticle = (categotySelect) => {
  const catalogoArticulos = document.getElementById("catalogoArticulos");

  window.addEventListener("load", function () {
    catalogoArticulos.innerHTML = "";
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

    const targetCategory = document.createElement("p");
    const categoryText = document.createTextNode(article.category)
    targetCategory.appendChild(categoryText)
    targetDescription.appendChild(targetCategory)

    targetBody.appendChild(targetTitle);
    targetBody.appendChild(targetDescription);

    //############## TARGET ###################

    target.appendChild(targetHeader);
    target.appendChild(targetBody);
    catalogoArticulos.appendChild(target);
  };

  if (categotySelect !== "Todos") {
    catalogoArticulos.innerHTML = "";
    articulosCatalogo.filter(items=>items.category==categotySelect).forEach((article) => crearTarget(article));
  }else{
    catalogoArticulos.innerHTML=""
    articulosCatalogo.forEach((article) => crearTarget(article));
  }  
};
