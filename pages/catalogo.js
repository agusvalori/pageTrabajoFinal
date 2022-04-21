export const mostrarTareas = (task) => {
    const divMostrarTarea = document.getElementById("mostrarTareas");

    const target = document.createElement("div");
    target.tagName = "target";
  
    const targetHeader = document.createElement("div");
    targetHeader.tagName = "targetHeader";

    const targetImg = document.createElement("img");
    targetHeader.tagName = "targetImg";
    targetImg.src =""

    /* 
    const textoTitulo = document.createTextNode(task.titulo);
    targetHeader.appendChild(textoTitulo);
  
    const targetBody = document.createElement("div");
    targetBody.tagName = "targetBody";
    const textoDescripcion = document.createTextNode(task.descripcion);
    targetHeader.appendChild(textoDescripcion);
  
    const targetFooter = document.createElement("div");
    targetFooter.tagName = "targetFooter";
  
    target.appendChild(targetHeader);
    target.appendChild(targetBody);
    target.appendChild(targetFooter);
  
    divMostrarTarea.appendChild(target);
    */
}