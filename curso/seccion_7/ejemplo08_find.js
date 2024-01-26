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

let serie_buscada = series_modificadas.find(serie => {
    return (serie.plataforma.toUpperCase()=="NETFLIX" && serie.numero_temporadas > 1);
});

console.log(serie_buscada);