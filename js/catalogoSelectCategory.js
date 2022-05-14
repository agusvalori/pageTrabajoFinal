var containerCatalogoSelect = document.getElementById("catalogoSelectCategory");
var categoryItems = [];

var articulos = [];

export const catalogoSelectCategory = (data) => {
    //Eliminamos categorias repetidas
    const dataArr = new Set(data.map((items) => items.category));
    articulos = [...dataArr];
    articulos.sort()
    //mostramos los elementos en el DOM
    articulos.forEach((items,index)=>{
        categoryItems[index] = document.createElement("div")
        categoryItems[index].className = "categoryItems"
        categoryItems[index].category =items

        let itemsText = document.createElement("label")
        itemsText.innerText =items;

        categoryItems[index].appendChild(itemsText)

        containerCatalogoSelect.appendChild(categoryItems[index])
    })
  
}
