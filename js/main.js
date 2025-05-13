
//////////////ARRAY DE FOTOS DEL BANNER

const bancoImagenBanner = [
"assets/img/banner/1.jpg",
"assets/img/banner/2.jpg",
"assets/img/banner/3.jpg",
"assets/img/banner/4.jpg",
"assets/img/banner/5.jpg",
"assets/img/banner/6.jpg",
"assets/img/banner/7.jpg",
"assets/img/banner/8.jpg"
];
/////////////ARRAY FOTOS DEL SECTION
const galeria = [
  {
    title: "Cuba",
    description: "Oportunidad unica",
    url_img: "assets/img/viajes/viajes-1.jpg"
  },
  {
    title: "Grecia",
    description: "Historia de los antiguos filosofos",
    url_img: "assets/img/viajes/viajes-4.jpg"
  },
  {
    title: "Camboya",
    description: "Esperiencia unica de descanso",
    url_img: "assets/img/viajes/viajes-2.jpg"
  }
];


////////////////  HEADER
//Acceder al selector de la id imagenBanner.
const imagenBanner = document.querySelector("#imagenBanner");

///funcion Random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};
console.log(getRandomInt(8));
//Modificar atributo src y por medio del random darle el valor para que determina la imagen por el valor dado
imagenBanner.setAttribute("src", bancoImagenBanner[getRandomInt(8)]);














////////////////  IMAGEN SECTION
//Acceder al selector de la id imagenSection.
const imagenSection = document.querySelector("#imagenSection");

// /// Crear etiquetas dinamicas
// const div = document.createElement("div");
// const img = document.createElement("img");
// const h2 = document.createElement("h2");
// const p = document.createElement("p");
// /// Ubicar etiquetas en el selector imagenSection.

// imagenSection.append(div);
// div.classList.add("imagen1");//añadir etiqueta
// div.append(img,h2,p);
// console.log(imagenSection);
// //Crear atributo src y valor 
// img.setAttribute("src","assets/img/viajes/viajes-1.jpg");
// img.setAttribute("alt","viajes-1");
// //Asignar texto  etiqueta que queremos mas .textContent
// h2.textContent = galeria[0]["title"];
// p.textContent = galeria[0]["description"];
// console.log(imagenSection);

 ////DUPLICAR PARA QUE SE VEAN LAS TRES IMAGENES
galeria.forEach((element) =>{
/// Crear etiquetas dinamicas
const div = document.createElement("div");
const img = document.createElement("img");
const h2 = document.createElement("h2");
const p = document.createElement("p");
/// Ubicar etiquetas en el selector imagenSection.
imagenSection.append(div);
div.classList.add("card");//añadir etiqueta
div.append(img,h2,p);
//Crear atributo src y valor 
///galeria[i] === element
img.setAttribute("src", element["url_img"]);
img.setAttribute("alt", element["title"]);
//Asignar texto  etiqueta que queremos mas .textContent
h2.textContent = element["title"];
p.textContent = element["description"];
console.log(imagenSection);
});




///ORDEN PARA IR COLOCANDO
/*1.VARIABLES*/

/*2.CLASES*/

/*3.EVENTOS*/

/*4.FUNCIONES*/ 

/*5.POR ULTIMO INVOCAR A LAS FUNCIONES*/








/*FUNCION BANER
*/

/*FUNCION CARDS
*/

/*AL FINAL INVOCAR FUNION BANER
*/

/*AL FINAL INVOCAR FUNCION CARDS
*/







