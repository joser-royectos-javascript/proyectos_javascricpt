function hacerLocucion(texto){
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = texto;
    window.speechSynthesis.speak(mensaje);
}