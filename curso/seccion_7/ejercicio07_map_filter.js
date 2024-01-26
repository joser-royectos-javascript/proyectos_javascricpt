/*
Crear un array con 5 objetos Series que tienen los atributos:
- Título
- Número de temporadas
- Plataforma (Netflix, Prime, HBO)

Con Map, vamos a construir un nuevo array con los mismo objetos
pero añadiendo el atributo "en-emision" que tendrá el valor true y
convirtiendo el título a mayúsculas.

Con Filter, obtener la lista de series que se proyectan
en Netflix y que tienen más de 1 temporada.

Mostrar los datos de la lista iterando con foreach.
*/


let series = [
    {titulo: "Titulo 1", numero_temporadas: 2,plataforma:"netflix"},
    {titulo: "Titulo 2", numero_temporadas: 2,plataforma:"hbo"},
    {titulo: "Titulo 3", numero_temporadas: 4,plataforma:"netflix"},
    {titulo: "Titulo 4", numero_temporadas: 1,plataforma:"netflix"},
    {titulo: "Titulo 5", numero_temporadas: 3,plataforma:"prime video"}
];

let series_modificadas = series.map(serie => {
    serie.en_emision = true;
    serie.titulo = serie.titulo.toUpperCase();
    return serie;
});

let series_netflix_mas_de_una_temporada = series_modificadas.filter(serie => {
    return (serie.plataforma.toUpperCase()=="NETFLIX" && serie.numero_temporadas > 1);
});

function mostrarLista(lista){
    lista.forEach(element => {
        console.log(element);   
    });
}

mostrarLista(series_netflix_mas_de_una_temporada);