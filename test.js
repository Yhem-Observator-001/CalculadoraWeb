function sumar(a, b) {
    return a + b;
}
// Prueba unitaria
function pruebaSuma() {

    let esperado = 8;

    let obtenido = sumar(5, 3);

    if (esperado === obtenido) {

        console.log(" Prueba correcta");

    } else {

        console.log(" Prueba incorrecta");

    }

}
pruebaSuma();