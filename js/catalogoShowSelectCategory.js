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
  articulos.forEach((items) => {
    categoryItems = document.createElement("button");
    categoryItems.className = "categoryItems";
    categoryItems.innerText = items;
    categoryItems.onclick= (event)=>{changeCategory(event.target.innerText)}

    containerCatalogoSelect.appendChild(categoryItems);
  });   
  catalogoShowArticle(categorySelect)
};

const changeCategory = (category)=>{    
    categorySelect = category
    catalogoShowArticle(categorySelect)
}
