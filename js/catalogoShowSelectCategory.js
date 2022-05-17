import { catalogoShowArticle } from "./catalogoShowArticle.js";

var containerCatalogoSelect = document.getElementById("catalogoSelectCategory");
var categoryItems = [];
var articulos = [];
var categorySelect;

export const catalogoShowSelectCategory = (data) => {
  //Eliminamos categorias repetidas
  const dataArr = new Set(data.map((items) => items.category));
  articulos = [...dataArr];
  articulos.sort();

  //mostramos los elementos en el DOM
  articulos.forEach((items, index) => {
    categoryItems[index] = document.createElement("button");
    categoryItems[index].className = "categoryItems";
    categoryItems[index].innerText = items;
    categoryItems[index].onclick = (event) => {
      changeCategory(event, index);
    };

    containerCatalogoSelect.appendChild(categoryItems[index]);
  });
  catalogoShowArticle(categorySelect);
};

const changeCategory = (event, currentIndex) => {
  categorySelect = event.target.innerText;
  event.target.className = "categoryItems categoryItemsSelect";
  catalogoShowArticle(categorySelect);
  for (let index = 0; index < categoryItems.length; index++) {
    if (index != currentIndex) {
      categoryItems[index].className = "categoryItems";
    }
  }
};
