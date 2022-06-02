var values;
var validacionMsg = "";
var root = document.getElementById("root");
var inName = document.getElementById("inName");
var inEmail = document.getElementById("inEmail");
var inPhone = document.getElementById("inPhone");
var selectInteres = document.getElementById("selectInteres");
var txtaComentario = document.getElementById("txtaComentario");
var btnSubmitContacto = document.getElementById("btnSubmitContacto");

const HandleInputChange = (event) => {
  const { name, value } = event.target;
  values = { ...values, [name]: value };
};

const HandleOnSubmit = () => {
  if (validacion()) {
    let msgDescription = [
      "Nombre: " + values.name,
      "Email: " + values.email,
      "Celular: " + values.phone,
      "Interes: " + values.selectInteres,
      "Comentario: " + values.comentario,
    ];
    msgSucces("Los datos se enviaron con exito", msgDescription);
    // values = "";
    //document.getElementById("formContacto").reset();
  } else {
    msgWarning("Advertencia: Error al ingresar los datos", validacionMsg);
    //alert(validacionMsg);
  }
  return false;
};

const validacion = () => {
  validacionMsg = [];  
  //validacion nombre
  if (/\d+/.test(values?.name) || values?.name == undefined) {    
    validacionMsg.push("Nombre: invalido o en blanco");
    inName.style.border = "solid 1px red";
    inName.style.backgroundColor = "rgba(255, 0, 3, 0.4)";
  } else {
    inName.style.border = "#00c2ff 1px solid";
    inName.style.backgroundColor = "white";
  }

  //validacion de correo
  if (
    (values?.email != undefined && !/^\w+@\w+(\.\w{3})$/.test(values?.email)) ||
    /\s+/.test(values?.email)
  ) {    
    validacionMsg.push("Correo: invalido o posee espacios en blanco");
    inEmail.style.border = "solid 1px red";
    inEmail.style.backgroundColor = "rgba(255, 0, 3, 0.4)";
  } else {
    inEmail.style.border = "#00c2ff 1px solid";
    inEmail.style.backgroundColor = "white";
  }

  //validacion del celular
  if (!Number.isInteger(+values?.phone) || /\s+/.test(values?.phone)) {
    validacionMsg.push("Telefono: invalido o en blanco");
    inPhone.style.border = "solid 1px red";
    inPhone.style.backgroundColor = "rgba(255, 0, 3, 0.4)";    
  } else {
    inPhone.style.border = "#00c2ff 1px solid";
    inPhone.style.backgroundColor = "white";
  }

  if (values?.comentario == "" || values?.comentario == undefined) {
    validacionMsg.push("Comentario: en blanco");
    txtaComentario.style.border = "solid 1px red";
    txtaComentario.style.backgroundColor = "rgba(255, 0, 3, 0.4)";    
  } else {
    txtaComentario.style.border = "#00c2ff 1px solid";
    txtaComentario.style.backgroundColor = "white";
  }
  return validacionMsg.length ==0;
};

//Expresiones regulares
// /\s+/ si hay espacios en blancos
// /[0-9]+/ si hay numeros == /\d+/

//validaciones de correos
// /^\w+@\w+(\.\w{3})$/
// /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ ?

//####### Mensajes de Alertas Personalizados #######
const msgSucces = (title, description) => {
  let className = {
    contentMsgRoot: "contentMsgRootSucces",
    contentMsg: "contentMsgSucces",
  };
  showMsgPersonalizado({ title, description, className });
};

const msgWarning = (title, description) => {
  let className = {
    contentMsgRoot: "contentMsgRootWarning",
    contentMsg: "contentMsgWarning",
  };
  showMsgPersonalizado({ title, description, className });
};

// show Mensajes
const showMsgPersonalizado = (msgData) => {

  if (!Array.isArray(msgData?.description)) {
    //si no es un array y es un json
    console.log("No es un array");
    return true;
  } else {
    let contentMsgRoot = document.createElement("div");
    contentMsgRoot.className = "contentMsgRoot";
    contentMsgRoot.classList.add(msgData.className.contentMsgRoot);
    let contentMsg = document.createElement("div");
    contentMsg.className = "contentMsg";
    contentMsg.classList.add(msgData.className.contentMsg);

    //Mensaje Header
    let headerMsg = document.createElement("div");
    let title = document.createElement("h3");
    title.innerHTML = msgData?.title;
    headerMsg.appendChild(title);

    //Mensaje Body Descripcion
    let bodyMsg = document.createElement("div");
    msgData?.description.forEach((item) => {
      let description = document.createElement("p");
      description.innerHTML = item;
      bodyMsg.appendChild(description);
    });

    //Mensaje Footer
    let footerMsg = document.createElement("div");
    let btnClose = document.createElement("button");
    btnClose.innerHTML = "cerrar";
    footerMsg.appendChild(btnClose);

    contentMsg.appendChild(headerMsg);
    contentMsg.appendChild(bodyMsg);
    contentMsg.appendChild(footerMsg);
    contentMsgRoot.appendChild(contentMsg);
    root.appendChild(contentMsgRoot);

    btnClose.focus();

    btnClose.onclick = () => {
      onCloseMsgContent();
    };

    // salir al hacer click en el contenedor root
    window.addEventListener(
      "click",
      (e) => {
        if (
          // container.contains(e.target)  muestra si estoy haciendo click en container en este caso esta en negado !
          //  containerRoot.contains(container) muestra si existe container esto es para que no siga ejecutandoce la funcion
          !contentMsg.contains(e.target) &&
          contentMsgRoot.contains(contentMsg)
        ) {
          onCloseMsgContent();
        }
      },
      true
    );

    onCloseMsgContent = ()=>{
      contentMsgRoot.classList.remove(msgData.className.contentMsgRoot);
      contentMsg.classList.remove(msgData.className.contentMsg);
      contentMsgRoot.remove();
      contentMsg.remove();
    }
  }
};
