//alert("Las imagenes se quedaran guardadas de manera local")

import { addData, readData } from "../../servicios/indexedDb.js";


let adminForm = document.getElementById("adminForm");
let inputTitle = document.getElementById("adminInTitle");
let inputDescription = document.getElementById("adminInDescription");
let inputImage = document.getElementById("adminInImage");
let imagePreview = document.getElementById("adminPrevImg");

adminForm.onsubmit = (event) => AdminOnSubmit(event);
inputTitle.onchange = (event) => HandleInputChange(event);
inputDescription.onchange = (event) => HandleInputChange(event);
inputImage.onchange = (event) => HandleInputChange(event);

let article;
let data=[];

const HandleInputChange = () => {
  const { name, files, value } = event.target;

  if (files && files[0]) {
    article = { ...article, [name]: URL.createObjectURL(files[0]) };
  } else {
    article = { ...article, [name]: value };
  }
};

const AdminOnSubmit = (event) => {
  event.preventDefault();  
  console.log(article);
  addData(article)
  readData(data);
  console.log("admin: ",data)
};
