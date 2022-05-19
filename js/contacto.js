console.log("Iniciando Contacto")
var values

const HandleInputChange = (event) => {  
    const { name, value } = event.target;
    values = { ...values, [name]: value };
  };

const HandleOnSubmit = ()=>{
    event.preventDefault();
    console.log(values)

    document.getElementById("formContacto").reset()
}