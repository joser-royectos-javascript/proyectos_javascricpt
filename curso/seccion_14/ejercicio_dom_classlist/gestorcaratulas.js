//const URL = "https://demo6481436.mockable.io/caratulas";
const URL = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/gameboy_covers.json";

var juegos;

function getJSONFromURL(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                juegos = JSON.parse(xmlHttp.responseText);
                procesarJuegos(juegos);
            } else {
                console.error("Ha ocurrido un error:" + xmlHttp.status);
                throw "Ha ocurrido un error " + xmlHttp.status;
            }
        }
    }
    xmlHttp.open("GET", encodeURI(url), true);
    xmlHttp.send();
}
function procesarJuegos(juegos){
    juegos.forEach(juego => {
        generarFicha(juego);
    });
}
function generarFicha(juego){
    const URL_IMAGEN = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/";
    let articulo = document.createElement("article");
    articulo.setAttribute('class','vj');//Asignamos un atributo class con valor vj
    let titulo = document.createElement("h3");
    let textoTitulo = document.createTextNode(juego.title);
    let imagen = document.createElement("img");
    imagen.src = URL_IMAGEN+juego.image;
    articulo.appendChild(titulo);
    titulo.appendChild(textoTitulo);
    articulo.appendChild(imagen);
    document.querySelector("#main").appendChild(articulo);
    if (juego.atenuado){
        articulo.classList.add("atenuado");
    }
}


document.querySelector("#iBuscador").addEventListener("input",()=>{
    document.querySelector("#main").innerHTML="";
    let textoBuscado = document.querySelector("#iBuscador").value.trim().toUpperCase();
    let juegosFiltrados = juegos.map((juego)=>{
        if (juego.title.toUpperCase().includes(textoBuscado)){
            juego.atenuado = false;
        } else {
            juego.atenuado = true;
        }
        return juego;
    });
    procesarJuegos(juegosFiltrados);
});

getJSONFromURL(URL);