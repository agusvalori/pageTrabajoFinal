import { articulosNovedades } from "./articulosNovedades.js";

export const sliderNovedades = () => {
  //################################### SLIDER #######################################
  var selectSlider = 0; //Index del arreglo imagenes

  var sliderImage = document.getElementById("sliderImagen");

  var btnDesplazarDer = document.getElementById("btnDesplazarDer");
  var btnDesplazarIzq = document.getElementById("btnDesplazarIzq");

  var imagenes = [];
  window.addEventListener("load", function () {
    imagenes = articulosNovedades;
    cambiarImagen(imagenes[selectSlider]);
  });

  const cambiarImagen = (image) => {
    sliderImage.src = image.src;
  };

  btnDesplazarIzq.onclick = function () {
    if (selectSlider > 0) {
      selectSlider--;
    } else {
      selectSlider = imagenes.length - 1;
    }
    cambiarImagen(imagenes[selectSlider]);
  };

  btnDesplazarDer.onclick = function () {
    if (selectSlider < imagenes.length - 1) {
      selectSlider++;
    } else {
      selectSlider = 0;
    }
    cambiarImagen(imagenes[selectSlider]);
  };
};
