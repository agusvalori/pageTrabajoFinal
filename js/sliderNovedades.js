export const sliderNovedades = (data) => {
  //################################### SLIDER #######################################

  console.log(data)
  var selectSlider = 0; //Index del arreglo imagenes

  var sliderImage = document.getElementById("sliderImagen");

  var btnDesplazarDer = document.getElementById("btnDesplazarDer");
  var btnDesplazarIzq = document.getElementById("btnDesplazarIzq");

  var imagenes = [];

  window.addEventListener("load", function () {
    imagenes = data;
    cambiarImagen(imagenes[selectSlider]);
    
    setInterval(desplazarDer, 3000);
  });

  const cambiarImagen = (image) => {
    sliderImage.src = image.src;
  };

  btnDesplazarIzq.onclick = function () {
    desplazarIzq();
  };

 

  btnDesplazarDer.onclick = function () {
    desplazarDer();
  };

  const desplazarIzq = () => {
    if (selectSlider > 0) {
      selectSlider--;
    } else {
      selectSlider = imagenes.length - 1;
    }
    cambiarImagen(imagenes[selectSlider]);
  };

  const desplazarDer = () => {
    if (selectSlider < imagenes.length - 1) {
      selectSlider++;
    } else {
      selectSlider = 0;
    }
    cambiarImagen(imagenes[selectSlider]);
  };
};
