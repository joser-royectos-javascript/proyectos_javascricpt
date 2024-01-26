document.querySelector("#bBuscar").addEventListener("click",function(event){
    let cadenaBusqueda = document.querySelector("#titulo").value;
    findMovie(cadenaBusqueda);
});

function findMovie(title){
    const API_KEY = 'fe486a03';
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", encodeURI(URL), true);//encodeURI adapta la cadena URL al formato de la web
    xmlHttp.send();

    xmlHttp.onload = function() {
        if (xmlHttp.status == 200){
            generarFicha(JSON.parse(xmlHttp.responseText));
        } else {
            console.error("Ha ocurrido un error:" + xmlHttp.status);
            throw "Ha ocurrido un error " + xmlHttp.status;
        }
    }

    xmlHttp.onprogress = function(event) {
        console.log("En progreso..." + event.loaded + " bytes de " + event.total + " bytes");
    }

    xmlHttp.onerror = function(event) {
        console.log("Error..." + event);
    }    
}

function generarFicha(movie){
    /*
        <div id="ficha">
            <h1>Star Wars</h1>
            <div>17/2/2022</div>
            <div>122 minutos</div>
            <div>Harrison Ford, John Hamilton, ...</div>
            <div>George Lucas</div>
            <div>
                <img  width="80%" src="https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg">
            </div>    
        </div> 
    */
    let divFicha = document.createElement("div");
    divFicha.id="ficha";
    divFicha.appendChild(document.createElement("h1")).appendChild(document.createTextNode(movie.Title));
    divFicha.appendChild(document.createElement("div")).appendChild(document.createTextNode(movie.Released));
    divFicha.appendChild(document.createElement("div")).appendChild(document.createTextNode(movie.Runtime));
    
    let divImagen = document.createElement("div");
    divImagen.id = "div-imagen";
    let imgPoster = document.createElement("img");
    imgPoster.src=movie.Poster;
    divImagen.appendChild(imgPoster);
    divFicha.appendChild(divImagen);

    document.querySelector("#contenedor-fichas").appendChild(divFicha);
}
