console.log("Admin")

var adminBody = document.getElementById("adminBody");
var bntAdminModCat = document.getElementById("bntAdminModCat");
var bntAdminModNov = document.getElementById("bntAdminModNov");

bntAdminModNov.onclick = function () {
    adminBody.style.backgroundColor = "red";
    modal();
};
bntAdminModCat.onclick = function () {
    adminBody.style.backgroundColor = "blue";
};

const modal = ()=>{
    var modalContent = document.createElement("div")
    modalContent.className = "modalContent"

}
