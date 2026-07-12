function obtenerNumero1() {
    return parseFloat(document.getElementById("numero1").value);
}

function obtenerNumero2() {
    return parseFloat(document.getElementById("numero2").value);
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

// SUMA
function sumar() {
    let n1 = obtenerNumero1();
    let n2 = obtenerNumero2();
    mostrarResultado(n1 + n2);
}

// RESTA
function restar() {
    let n1 = obtenerNumero1();
    let n2 = obtenerNumero2();
    mostrarResultado(n1 - n2);
}

// MULTIPLICACIÓN
function multiplicar() {
    let n1 = obtenerNumero1();
    let n2 = obtenerNumero2();
    mostrarResultado(n1 * n2);
}

// DIVISIÓN
function dividir() {
    let n1 = obtenerNumero1();
    let n2 = obtenerNumero2();

    if (n2 == 0) {
        mostrarResultado("No se puede dividir entre cero");
        return;
    }

    mostrarResultado(n1 / n2);
}

// POTENCIA
function potencia() {
    let n1 = obtenerNumero1();
    let n2 = obtenerNumero2();

    mostrarResultado(Math.pow(n1, n2));
}

// RAÍZ CUADRADA
function raiz() {
    let n1 = obtenerNumero1();

    if (n1 < 0) {
        mostrarResultado("No existe raíz real");
        return;
    }

    mostrarResultado(Math.sqrt(n1));
}