'use strict';
let userSearch = document.querySelector('.js-button');

let listOfFilms = [];

function getDataApi() {
  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch.value}`)
    .then(response => response.json())
    .then(data => {
      listOfFilms = data;
      console.log(listOfFilms);
    })
    .catch(function(err) {
      console.log('Error al traer los datos del servidor');
    });
  paintFilmList();
  //aqui ahy que volver a escuchar la pelicula clickada
}
getDataApi();
//pintamos la pelicula con el titulo
const sectionList = document.querySelector('.section--search');

function paintFilmList() {
  let HTMLCode = '';
  //recorremos el array para elegir la pelicula que pintamos
  for (let film of listOfFilms) {
    HTMLCode += `<li>`;
    HTMLCode += `<div class="js-container">`;
    HTMLCode += `<img src="${film.image.medium}" alt="${film.name}" />`;
    HTMLCode += `<h3>${film.name}</h3>`;
    HTMLCode += `</div>`;
    HTMLCode += `</li>`;
  }
  sectionList.innerHTML += HTMLCode;
}

function listenFilms() {
  //hacer document query selector all para identificar la futura pelicula clickada por id
  //creamos una constante que recoja esa clase comun
  //hacer FOR OF para recorrer ese document ...ALL
  //meter addEventListener dentro del for??? si, porque tengo distintas y luego as identificare en mi otra funcion
}

function identifyFilm(ev) {
  // ev.target.id la meto en otro array con push
  //ACORDARSE DE CREAR OTRO ARRAY DONDE METER FAV
  //PINTAR mis FILMS
}
//HACER LA FUNCION CON SUPER CHICHA QUE NO SE COMO VOY A HACER

function addFilm (ev){
    const clickedFilmId = ev.target.id ;
    for (mis films aqui){
if (film.id es igual que clickedFilmId){
    metemos en el array nuevo la peli y ponemos la clase al div de la pelicula
    //mirar esto bien, otra opcion: con los indices de las films, sease esta mi pelicula en en array de fav? si es tru no hacemos nada y si es false la metemos
}
    }
}