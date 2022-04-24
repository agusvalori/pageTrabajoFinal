import { sliderNovedades } from "./sliderNovedades.js";

sliderNovedades();


var navbarUl = document.getElementById("navbar");
var navbarLi = document.createElement("li");
var navbarA = document.createElement("a");
var navbarAText = document.createTextNode("Admin");
navbarA.appendChild(navbarAText);
navbarA.href = "./pages/admin/Admin.html";
navbarLi.appendChild(navbarA);
navbarUl.appendChild(navbarLi);
