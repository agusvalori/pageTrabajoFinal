import { catalogoShowArticle } from "./catalogoShowArticle.js";

var containerCatalogoSelect = document.getElementById("catalogoSelectCategory");
var categoryItems = [];
var articulos = [];
var categorySelect;
let categoryItemsTodos = document.createElement("button");

export const catalogoShowSelectCategory = (data) => {
  //Eliminamos categorias repetidas
  const dataArr = new Set(data.map((items) => items.category));
  articulos = [...dataArr];
  articulos.sort();

  categoryItems[0] = document.createElement("button");
  categoryItems[0].className = "categoryItems";
  categoryItems[0].innerText = "Todos";
  categoryItems[0].onclick = (event) => {
    changeCategory(event, 0);
  };

  containerCatalogoSelect.appendChild(categoryItems[0]);

  //mostramos los elementos en el DOM
  articulos.forEach((items, index) => {
    categoryItems[index+1] = document.createElement("button");
    categoryItems[index+1].className = "categoryItems";
    categoryItems[index+1].innerText = items;
    categoryItems[index+1].onclick = (event) => {
      changeCategory(event, index+1);
    };

    containerCatalogoSelect.appendChild(categoryItems[index+1]);
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
      categoryItemsTodos.classList.remove("categoryItemsSelect")     
    }
  }
};
