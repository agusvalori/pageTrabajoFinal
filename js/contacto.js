

var values;
var validacionMsg = "";

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
  event.preventDefault();  

  if (validacion()) {        
    console.log(values.values());
    //msgSucces({title:"",descripcion:values.toString()});
    values = "";
    document.getElementById("formContacto").reset();
  } else {    
    alert(validacionMsg);
  }
  
};

const validacion = () => {
  validacionMsg = "";
  result = true;

  //validacion nombre
  if (/\d+/.test(values?.name) || values?.name == undefined) {
    result &= false;
    validacionMsg += " Nombre invalido";
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
    result &= false;
    validacionMsg += "\n Correo invalido o posee espacios en blanco";
    inEmail.style.border = "solid 1px red";
    inEmail.style.backgroundColor = "rgba(255, 0, 3, 0.4)";
  } else {
    inEmail.style.border = "#00c2ff 1px solid";
    inEmail.style.backgroundColor = "white";
  }

  //validacion del celular
  if (!Number.isInteger(+values?.phone) || /\s+/.test(values?.phone)) {
    validacionMsg += "\n Telefono invalido o posee espacios en blanco";
    inPhone.style.border = "solid 1px red";
    inPhone.style.backgroundColor = "rgba(255, 0, 3, 0.4)";
    result &= false;
  } else {
    inPhone.style.border = "#00c2ff 1px solid";
    inPhone.style.backgroundColor = "white";
  }

  if (values?.comentario == "" || values?.comentario == undefined) {
    validacionMsg += "\n Comentario posee espacios en blanco";
    txtaComentario.style.border = "solid 1px red";
    txtaComentario.style.backgroundColor = "rgba(255, 0, 3, 0.4)";
    result &= false;
  } else {
    txtaComentario.style.border = "#00c2ff 1px solid";
    txtaComentario.style.backgroundColor = "white";
  }
  return result;
};

//Expresiones regulares
// /\s+/ si hay espacios en blancos
// /[0-9]+/ si hay numeros == /\d+/

//validaciones de correos
// /^\w+@\w+(\.\w{3})$/
// /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ ?





// #########################