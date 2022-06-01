let root = document.getElementById("root");
let containerRoot = document.createElement("div");
containerRoot.className = "containerRootMsgShow";

let container = document.createElement("div");
container.className = "containerMsgShow";

// Mensajes de exito
const msgSucces = (data) => {
//data {type, title, descripcion}  
  let dataSucces = {
    ...data,
    className: {
      containerRoot: "containerRootMsgSucces",
      container: "containerMsgSucces",
    },
  };
  showTargetMensaje(dataSucces);
};



// Mensajes de informacion
const msgInfo = (data) => {
  //data {type, title, descripcion}
  let dataInfo = {
    ...data,
    className: {
      containerRoot: "containerRootMsgInfo",
      container: "containerMsgInfo",
    },
  };
  showTargetMensaje(dataInfo);
};


// Mensajes de advertencia
const msgWarning = (data) => {
  //data {type, title, descripcion}
  let dataWarning = {
    ...data,
    className: {
      containerRoot: "containerRootMsgWarning",
      container: "containerMsgWarning",
    },
  };
  showTargetMensaje(dataWarning);
};


// Mensaje de error
const msgError = (data) => {
  //data {type, title, descripcion}
  let dataError = {
    ...data,
    className: {
      containerRoot: "containerRootMsgError",
      container: "containerMsgError",
    },
  };
  showTargetMensaje(dataError);
};




const showTargetMensaje = (data) => {
  containerRoot.innerHTML = "";
  container.innerHTML = "";
  containerRoot.classList.add(data.className.containerRoot);
  container.classList.add(data.className.container);
  // header
  let header = document.createElement("div");
  let title = document.createElement("h2");
  title.innerHTML = data.title;
  header.appendChild(title);

  // body
  let body = document.createElement("div");
  let descripcion = document.createElement("h2");
  descripcion.innerHTML = data.descripcion;
  body.appendChild(descripcion);

  // footer
  let footer = document.createElement("div");
  let btnCancelar = document.createElement("button");
  btnCancelar.innerHTML = "salir";

  footer.appendChild(btnCancelar);

  container.appendChild(header);
  container.appendChild(body);
  container.appendChild(footer);

  containerRoot.appendChild(container);
  root.appendChild(containerRoot);

  // Boton salir
  btnCancelar.onclick = () => {
    container.remove();
    containerRoot.remove();
  };

  // salir al hacer click en el contenedor root
  window.addEventListener(
    "click",
    (e) => {
      if (!container.contains(e.target) && containerRoot.contains(container)) {
        // container.contains(e.target)  muestra si estoy haciendo click en container en este caso esta en negado !
        //  containerRoot.contains(container) muestra si existe container esto es para que no siga ejecutandoce la funcion
        container.remove();
        containerRoot.remove();
      }
    },
    true
  );
};

export { msgSucces, msgInfo, msgWarning, msgError };