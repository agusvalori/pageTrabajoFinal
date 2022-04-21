console.log("Iniciando Programa");



//################################### SLIDER #######################################
var selectSlider = 0; //Index del arreglo imagenes
var imagenes = []; // arreglo con los src de las imagenes
var sliderImage = document.getElementById("sliderImagen");
var sliderContenedor = document.getElementById("sliderContenedor");

window.addEventListener("load", function () {
  imagenes[0] = "archivos/image/image1.jpg";
  imagenes[1] = "archivos/image/image2.jpg";
  imagenes[2] = "archivos/image/image3.jpg";
  imagenes[3] = "archivos/image/image4.jpg";
  imagenes[4] = "archivos/image/image5.jpg";
  cambiarImagen();
});

const cambiarImagen = () => {
  sliderImage.style.transform = "rotateX(360deg)";
  sliderImage.style.transition = "2s";
  sliderImage.src = imagenes[selectSlider];
};

const desplazarDerecha = () => {
  if (selectSlider < imagenes.length - 1) {
    selectSlider++;
  } else {
    selectSlider = 0;
  }
  cambiarImagen();
};

const desplazarIzquierda = () => {
  if (selectSlider > 0) {
    selectSlider--;
  } else {
    selectSlider = imagenes.length - 1;
  }
  cambiarImagen();
};

const onKeyPress = (event) => {
  console.log(event);
};

const onKeyPressUp = (event) => {
  switch (event.code) {
    case "ArrowRight":
      desplazarDerecha();
      break;
    case "ArrowLeft":
      desplazarIzquierda();
      break;
    default:
      break;
  }
};

