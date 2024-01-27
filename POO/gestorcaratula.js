const URL_JSON = "https://demo6481436.mockable.io/caratulas";
const URL_IMAGENES = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/";
const caratulasContainer = document.getElementById("caratulasContainer");
const mostrarBtn = document.getElementById("mostrarBtn");
const busquedaInput = document.getElementById("busquedaInput");
const buscarBtn = document.getElementById("buscarBtn");

// Función para obtener el JSON de las carátulas
async function obtenerCaratulas() {
    try {
        const response = await fetch(URL_JSON);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las carátulas:", error);
    }
}

// Función para mostrar todas las carátulas
async function mostrarTodasCaratulas() {
    const caratulas = await obtenerCaratulas();
    mostrarCaratulas(caratulas);
}

// Función para mostrar las carátulas
function mostrarCaratulas(caratulas) {
    caratulasContainer.innerHTML = "";
    caratulas.forEach(caratula => {
        const articulo = generaFicha(caratula);
        caratulasContainer.appendChild(articulo);
    });
}

// Función para generar la ficha de la carátula
function generaFicha(juego) {
    const articulo = document.createElement("article");
    articulo.setAttribute("class", "caratula");

    const titulo = document.createElement("h2");
    titulo.textContent = juego.title;

    const imagen = document.createElement("img");
    imagen.src = `${URL_IMAGENES}${juego.image}`;
    imagen.alt = juego.title;

    articulo.appendChild(titulo);
    articulo.appendChild(imagen);

    return articulo;
}

// Función para filtrar las carátulas por nombre
function filtrarCaratulas(nombre) {
    const caratulas = document.querySelectorAll(".caratula");
    caratulas.forEach(caratula => {
        const titulo = caratula.querySelector("h2").textContent.toLowerCase();
        if (titulo.includes(nombre.toLowerCase())) {
            caratula.style.display = "block";
        } else {
            caratula.style.display = "none";
        }
    });
}

// Evento para mostrar todas las carátulas al hacer clic en el botón "Mostrar Todas"
mostrarBtn.addEventListener("click", mostrarTodasCaratulas);

// Evento para filtrar las carátulas al escribir en el campo de búsqueda
busquedaInput.addEventListener("input", () => {
    const busqueda = busquedaInput.value.trim();
    filtrarCaratulas(busqueda);
});

// Evento pa