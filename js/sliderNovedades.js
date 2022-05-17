export const sliderNovedades = (data) => {
  //################################### SLIDER #######################################

  //################################### Elementos Html #######################################

  var sliderImage = document.getElementById("sliderImagen");

  var btnDesplazarDer = document.getElementById("btnDesplazarDer");
  var btnDesplazarIzq = document.getElementById("btnDesplazarIzq");
  var sliderFooter = document.getElementById("sliderFooter");

  //################################### Funcionalidad #######################################
  var selectSlider = 0; //Index del arreglo imagenes
  var imagenes = []; //arreglo que va a incluir todas las src de las imagenes
  var playPause = true;
  var sliderChangeAuto;

  window.addEventListener("load", function () {
    imagenes = data;
    cambiarImagen(imagenes[selectSlider]); //funcion que cambia a la imagen de acuerdo al selectSlider actual

    sliderChangeAuto = setInterval(desplazarDer, 3000);
  });

  // cambiamos la imagen desde los botones o desde el setInterval
  const cambiarImagen = (image) => {
    sliderImage.src = image.src;    
    if (selectSlider == 0) {
      btnDesplazarIzq.style.backgroundImage =
        "url(" + imagenes[imagenes.length - 1].src + ")";
    } else {
      btnDesplazarIzq.style.backgroundImage =
        "url(" + imagenes[selectSlider - 1].src + ")";
    }
    if (selectSlider == imagenes.length - 1) {
      btnDesplazarDer.style.backgroundImage = "url(" + imagenes[0].src + ")";
    } else {
      btnDesplazarDer.style.backgroundImage =
        "url(" + imagenes[selectSlider + 1].src + ")";
    }

    showFooter(selectSlider);
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

  //############################ FOOTER #####################
  var btnPlayPause = document.createElement("div");
  btnPlayPause.className = "btnPlayPause";
  var imgPlayPause = document.createElement("img");
  imgPlayPause.className = "imgPlayPause";


  //controlamos el setInterval dandole pausa o play
  btnPlayPause.onclick = () => {
    playPause = !playPause;
    if (playPause) {
      sliderChangeAuto = setInterval(desplazarDer, 3000);
      imgPlayPause.src = "../../archivos/icons/play.png";
    } else {
      clearInterval(sliderChangeAuto)
      imgPlayPause.src = "../../archivos/icons/pause.png";
    }
  };

  //cambiamos el icono de play o pause
  playPause
    ? (imgPlayPause.src = "../../archivos/icons/play.png")
    : (imgPlayPause.src = "../../archivos/icons/pause.png");

  btnPlayPause.appendChild(imgPlayPause);

  //Creamos los botones que nos van a mostrar play o pause y los de posision

  const showFooter = (indexSlider) => {
    sliderFooter.innerHTML = "";
    sliderFooter.appendChild(btnPlayPause);
    let sliderFooterItems = [];

    for (let index = 0; index < imagenes.length; index++) {
      sliderFooterItems[index] = document.createElement("div");
      sliderFooterItems[index].index = index;
      sliderFooterItems[index].onclick = () => {
        selectSlider = index;
        cambiarImagen(imagenes[index]);
      };
      if (index == indexSlider) {
        sliderFooterItems[index].className = "sliderFooterItemsSelect";
      } else {
        sliderFooterItems[index].className = "sliderFooterItems";
      }

      sliderFooter.appendChild(sliderFooterItems[index]);
    }
  };
};
