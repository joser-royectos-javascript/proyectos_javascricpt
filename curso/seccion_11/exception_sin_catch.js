try {
    throw Error("Ha ocurrido un error");
    console.log(x);
} finally {
    console.log("FIN");
}