console.log("Admin");

var tabBody = document.getElementById("adminTabBody");
var bntAdminTabCat = document.getElementById("bntAdminTabCat");
var bntAdminTabNov = document.getElementById("bntAdminTabNov");

var tabCatalogo = document.createElement("div");
var tabNovedades = document.createElement("div");

bntAdminTabNov.onclick = function () {
  tabBody.replaceChildren(tabNovedades, tabCatalogo);
  tabCatalogo.remove();
};
bntAdminTabCat.onclick = function () {
  tabBody.replaceChildren(tabCatalogo, tabNovedades);
  tabNovedades.remove();
};

