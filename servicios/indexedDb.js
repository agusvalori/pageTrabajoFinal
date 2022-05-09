var dbName = "ArticulosDB";
var dbVersion = 1;
var db;
//abrimos base de datosname
var openDb = indexedDB.open(dbName, dbVersion);

//Si la base de datos existe ingresamos
openDb.onsuccess = () => {
  db = openDb.result;
  console.log("BASE DE DATOS ABIERTA: ", db.name);

  readData();
};

//Verificamos si existe y si no existe es creada
openDb.onupgradeneeded = () => {
  db = openDb.result;
  console.log("BASE DE DATOS CREADA: ", db.name);

  const objectStore = db.createObjectStore("articulos",{
      //key generada de forma automatica 
      //autoIncrement:true
      //key obtenida de un objeto que voy a guardar en este caso de titulo
      keyPath:'title'
    });
};
openDb.onerror = (error) => {
  console.log("Error", error);
};


//Agregamos datos
export const addData = (data) => {
  //transaction("articulos",readonly" or "readwrite")
  const transaction = db.transaction(["articulos"], "readwrite");
  const objectStore = transaction.objectStore("articulos");
  const request = objectStore.add(data)
};

export const readData = (setData)=>{
    let data =[];
    const transaction = db.transaction(["articulos"], "readonly");
    const objectStore = transaction.objectStore("articulos");
    const request = objectStore.openCursor()
    request.onsuccess=(e)=>{
        const cursor =e.target.result;
        if(cursor){
            data.push(cursor.value)
            cursor.continue();
        }
    }
    setData = data;
}
